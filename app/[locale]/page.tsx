import type {Metadata} from 'next';
import Link from 'next-intl/link';
import {getMessages} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';
import Hero from '@/components/Hero';
import {type Locale} from '@/locales/config';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const home = (messages as any)?.Metadata?.home ?? {};
  return {
    title: home.title,
    description: home.description
  };
}

const featureCards = [
  {
    href: '/brunch',
    translationPath: 'ctaBrunch'
  },
  {
    href: '/reservation',
    translationPath: 'ctaReservation'
  }
] as const;

export default function HomePage() {
  const home = useTranslations('Home');
  const gallery = useTranslations('Gallery');
  const galleryImages = (gallery.raw('images') as string[]) ?? [];

  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <section>
        <Container className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">{home('conceptTitle')}</h2>
            <p className="text-slate-700">{home('concept')}</p>
            <div className="flex flex-wrap gap-3">
              {featureCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="inline-flex items-center rounded-full border border-brand-dark px-5 py-2 text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
                >
                  {home(card.translationPath)}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-3xl bg-white/70 p-8 shadow-lg shadow-brand-dark/10">
            <h3 className="text-xl font-semibold text-brand-dark">{home('highlightTitle')}</h3>
            <p className="text-slate-700">{home('highlight')}</p>
          </div>
        </Container>
      </section>
      <section id="galerie" className="bg-white/70 py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-slate-900">{gallery('intro')}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {galleryImages.map((label, index) => (
              <div
                key={label}
                className="group relative flex h-40 items-end overflow-hidden rounded-2xl bg-brand-dark/10 p-4 shadow-lg shadow-brand-dark/10"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.05) 0%, rgba(15,23,42,0.65) 100%), url(https://images.unsplash.com/${
                    index % 2 === 0
                      ? 'photo-1522202176988-66273c2fd55f'
                      : 'photo-1470337458703-46ad1756a187'
                  }?auto=format&fit=crop&w=800&q=80)`
                }}
              >
                <span className="text-sm font-semibold text-white drop-shadow-md">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
