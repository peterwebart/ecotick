import { site } from "@/content/site";

/**
 * Google Maps embed for the Creekford Road base.
 *
 * loading="lazy" plus an explicit aspect box means the iframe never blocks
 * first paint and never shifts layout. The title is required — without it a
 * screen reader announces only "iframe".
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-border sm:aspect-[16/9]">
        <iframe
          title={`Map showing ${site.name} at ${site.address.street}, ${site.address.city}`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2856.536150621333!2d-76.60875968701552!3d44.27836157095885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2adbc5ece8d17%3A0x71a145606d983721!2sEco-Tick%20Solutions!5e0!3m2!1sen!2sca!4v1786669753400!5m2!1sen!2sca"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      <figcaption className="mt-3 text-sm text-ink-500">
        {site.address.street}, {site.address.city}, {site.address.regionName}{" "}
        {site.address.postalCode}
      </figcaption>
    </figure>
  );
}
