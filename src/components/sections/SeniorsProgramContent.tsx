import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { PageHero } from '@/components/sections/page-hero';

type SeniorsProgramContentProps = {
  showHero?: boolean;
};

export async function SeniorsProgramContent({
  showHero = true,
}: SeniorsProgramContentProps) {
  const t = await getTranslations('seniors');

  const topics = [
    {
      title: t('topic1Title'),
      description: t('topic1Desc'),
    },
    {
      title: t('topic2Title'),
      description: t('topic2Desc'),
    },
    {
      title: t('topic3Title'),
      description: t('topic3Desc'),
    },
    {
      title: t('topic4Title'),
      description: t('topic4Desc'),
    },
    {
      title: t('topic5Title'),
      description: t('topic5Desc'),
    },
    {
      title: t('topic6Title'),
      description: t('topic6Desc'),
    },
  ];

  return (
    <>
      {showHero && (
        <PageHero
          title={t('heroTitle')}
          subtitle={t('heroSubtitle')}
          breadcrumbs={[
            { label: t('breadcrumbPrograms'), href: '/community-services' },
            { label: t('breadcrumbSeniors') },
          ]}
        />
      )}

      <section className="airi-editorial bg-grey-50">
        <div className="container py-16 md:py-24">
          <h2 className="mb-4 text-h2">{t('learnTitle')}</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <div key={topic.title} className="airi-panel">
                <span className="airi-icon-number mb-6">{String(index + 1).padStart(2, '0')}</span><h3 className="mb-3 text-h4">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-grey">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-primary/15 bg-white p-7 shadow-sm md:p-10">

          <p className="airi-kicker mb-3">{t('heroTitle')}</p><h2 className="mb-6 text-h3">{t('learnTitle')}</h2>

          <Link
            href="https://drive.google.com/file/d/1uAru5zaJOybWDsgYsSSFnBU-fLRpWc8Y/view?usp=sharing"
            className="airi-action"
          >
            {t('heroTitle')} — PDF ↗
          </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container py-16 md:py-20">
          <div className="airi-feature-band p-8 md:p-14"><h2 className="mb-4 text-h2 text-white">{t('ctaTitle')}</h2>
          <p className="mb-8 max-w-xl text-body text-white/85">
            {t('ctaText')}
          </p>

          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-lime px-7 py-3 text-sm font-bold text-foreground transition-colors hover:bg-white"
          >
            {t('ctaButton')} →
          </Link>
          </div>
        </div>
      </section>
    </>
  );
}