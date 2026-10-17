import { Link } from '@/i18n/routing';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="hero-pixels" aria-hidden="true" />
      <div className="container relative z-10 py-20 md:py-28 lg:py-32">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/75">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-4xl text-display-sm font-bold leading-tight text-white md:text-display">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-7 max-w-3xl border-l-4 border-lime pl-5 text-body-lg leading-relaxed text-white/90">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
