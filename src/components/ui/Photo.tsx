import Image from "next/image";
import type { SiteImage } from "@/content/images";

/**
 * Static imports carry intrinsic width and height, so next/image reserves the
 * correct box before the file loads and CLS stays at zero (brief phase 30).
 *
 * `priority` belongs on above-the-fold imagery only. Everything else stays lazy.
 */
export function Photo({
  image,
  ratio,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
  position = "center",
}: {
  image: SiteImage;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Focal point, so mobile crops do not cut the subject out of frame. */
  position?: string;
}) {
  return (
    <div
      style={ratio ? { aspectRatio: ratio } : undefined}
      className={`relative overflow-hidden rounded-card ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        priority={priority}
        placeholder="blur"
        sizes={sizes}
        fill={Boolean(ratio)}
        style={ratio ? { objectFit: "cover", objectPosition: position } : undefined}
        className={ratio ? "" : "h-auto w-full"}
      />
    </div>
  );
}
