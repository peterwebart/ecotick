import { NextResponse, type NextRequest } from "next/server";

/**
 * Host canonicalisation: exactly one URL for every page.
 *
 *   http://…            -> https://…
 *   https://www.…       -> https://…            (non-www is canonical)
 *
 * Both are 308 permanent redirects, which preserve the request method and pass
 * ranking signal. Two hosts serving identical content splits that signal and
 * gives Google a duplicate-content decision to make on your behalf.
 *
 * Protocol is read from x-forwarded-proto because the app sits behind Coolify's
 * proxy and always sees http on the socket itself.
 *
 * This is a safety net, not the whole answer. Also enable "Force HTTPS" in
 * Coolify so TLS terminates before the request ever reaches Node — a redirect
 * here still means the first request travelled in the clear.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const proto = request.headers.get("x-forwarded-proto") ?? "https";

  const isWww = host.startsWith("www.");
  const isHttp = proto === "http";

  // Never redirect localhost — it has no TLS and no www.
  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  if (isLocal || (!isWww && !isHttp)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.host = isWww ? host.slice(4) : host;
  url.port = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  /**
   * Everything except Next's internals and static files. Redirecting a hashed
   * asset costs a round trip and gains nothing — those are only ever requested
   * from a page that has already been canonicalised.
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/).*)",
  ],
};
