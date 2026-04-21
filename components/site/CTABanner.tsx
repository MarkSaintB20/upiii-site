import Link from "next/link";

interface Props {
  headline: string;
  subline: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CTABanner({ headline, subline, ctaLabel, ctaHref }: Props) {
  return (
    <section className="py-24 bg-upiii-orange flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
        {headline}
      </h2>
      <p className="text-lg text-orange-100 max-w-2xl mb-10">
        {subline}
      </p>
      <Link
        href={ctaHref}
        className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gray-950 text-white font-bold text-lg hover:bg-gray-900 transition-colors shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-upiii-orange"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
