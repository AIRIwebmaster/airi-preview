import { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/page-hero';
import { BentoStats } from '@/components/sections/bento-stats';
import { PartnersGrid } from '@/components/sections/partners-grid';
import { TeamGrid } from '@/components/sections/team-grid';
import { LeadershipGrid } from '@/components/sections/leadership-grid';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about AIRI Foundation's mission to AI research, technical implementation and community services.",
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const tp = await getTranslations('positioning');

  const values = [
    {
      title: t('value1Title'),
      description: t('value1Desc'),
    },
    {
      title: t('value2Title'),
      description: t('value2Desc'),
    },
    {
      title: t('value3Title'),
      description: t('value3Desc'),
    },
    {
      title: t('value4Title'),
      description: t('value4Desc'),
    },
  ];

  return (
    <>
      <PageHero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        breadcrumbs={[{ label: t('breadcrumbHome'), href: '/' }, { label: t('breadcrumbAbout') }]}
      />

      <section className="airi-editorial border-b border-grey-200"><div className="container grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:items-start md:py-24"><div><span className="airi-kicker">{locale==='fr'?'Notre identité':'Who we are'}</span><h2 className="mt-5 text-h2">{locale==='fr'?'L’IA pour les personnes et les organisations':'AI that serves people and organisations'}</h2></div><div className="rounded-2xl border-l-4 border-lime bg-white p-7 shadow-lg shadow-primary/5 md:p-10"><p className="text-body-lg leading-relaxed text-grey">{t('introText')}</p><Link href="/contact" className="airi-action mt-8">{t('ctaContact')} <span aria-hidden="true">↗</span></Link></div></div></section>
      {/* Mission & Vision */}
      <section className="airi-editorial border-t border-grey-200">
        <div className="container grid gap-6 py-16 md:grid-cols-2 md:py-24">
          <div className="airi-panel border-t-4 border-t-lime p-8 md:p-12">
            <h2 className="mb-4 text-h3">{t('missionTitle')}</h2>
            <p className="text-body text-grey">
              {t('missionText')}
            </p>
          </div>
          <div className="airi-panel border-t-4 border-t-primary p-8 md:p-12">
            <h2 className="mb-4 text-h3">{t('visionTitle')}</h2>
            <p className="text-body text-grey">
              {t('visionText')}
            </p>
          </div>
        </div>
      </section>

      <section className="airi-editorial border-t border-grey-200"><div className="container py-16 md:py-24"><span className="airi-kicker">{locale==='fr'?'Ce que nous faisons':'What we do'}</span><h2 className="mb-9 mt-4 text-h2">{tp('title')}</h2><div className="grid gap-6 md:grid-cols-3">{(['literacy','adoption','implementation'] as const).map(key=><article key={key} className="airi-panel flex h-full flex-col"><h3 className="mb-3 text-h4">{tp(key)}</h3><p className="mb-6 text-sm leading-relaxed text-grey">{tp(`${key}Text`)}</p><Link href={key==='literacy'?'/ai-literacy':key==='adoption'?'/responsible-adoption':'/technical-implementation'} className="mt-auto inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4">{locale==='fr'?'Découvrir ce domaine':'Explore this area'} <span aria-hidden="true">→</span></Link></article>)}</div></div></section>
      {/* Values */}
      <section className="airi-editorial bg-grey-50">
        <div className="container py-16 md:py-24">
          <h2 className="mb-4 text-h2">{t('whyTitle')}</h2>
          {/* <p className="mb-10 text-body text-grey">{t('whySubtitle')}</p> */}
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <article key={value.title} className="airi-panel"><span className="airi-icon-number mb-5">{String(index+1).padStart(2,'0')}</span>
                <h3 className="mb-3 text-h4">{value.title}</h3>
                <p className="text-sm leading-relaxed text-grey">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

        <section id="leadership" className="airi-editorial scroll-mt-20 border-t border-grey-200"><div className="container py-16 md:py-24"><span className="airi-kicker">{locale==='fr'?'Nos personnes':'Our people'}</span>
        <h2 className="mb-4 text-h2">{t('leadershipTitle')}</h2>
        {/* <p className="mb-10 text-body text-grey">{t('leadershipSubtitle')}</p> */}
        <LeadershipGrid />
        </div></section>


      {/* Team */}
      <section className="scroll-mt-20 bg-grey-50"><div className="container py-16 md:py-24">
        <h2 className="mb-8 text-h2">{t('boardTitle')}</h2>
        {/* <p className="mb-10 text-body text-grey">{t('leadershipSubtitle')}</p> */}
        <TeamGrid />
        </div></section>


      {/* Interns */}
      <section className="scroll-mt-20 border-t border-grey-200"><div className="container py-12 md:py-16">
        <h2 className="mb-4 text-h3">{t('internTitle')}</h2>
        <p className="mb-10 text-body text-grey">{t('internSubtitle')}</p>
        {/* <TeamGrid /> */}
        </div></section>

      {/* Impact — bento grid */}
      <section id="impact" className="airi-editorial scroll-mt-20 border-t border-grey-200 bg-grey-50">
        <div className="container py-16 md:py-24">
          <h2 className="mb-4 text-h2">{t('impactTitle')}</h2>
          <p className="mb-10 max-w-2xl text-body text-grey">
            {t('impactText')}
          </p>
          <BentoStats variant="light" />
        </div>
      </section>

      {/* Partners */}
      <section className="airi-editorial border-t border-grey-200">
        <div className="container py-16 md:py-24">
          <h2 className="mb-4 text-h2">{t('partnersTitle')}</h2>
          {/* <p className="mb-10 max-w-2xl text-body text-grey">
            {t('partnersText')}
          </p> */}
          <PartnersGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="container py-16 md:py-20"><div className="airi-feature-band p-8 md:p-14">
          <h2 className="mb-4 text-h2 text-white">{t('ctaTitle')}</h2>
          {/* <p className="mb-8 max-w-xl text-body text-white/80">
            {t('ctaText')}
          </p> */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/community-services"
              className="rounded-lg bg-lime px-7 py-3 text-sm font-bold text-foreground transition-colors hover:bg-white"
            >
              {t('ctaPrograms')}
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t('ctaContact')}
            </Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
