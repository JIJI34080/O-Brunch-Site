import Image from 'next/image';
import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';

export default function Hero() {
  const hero = useTranslations('Hero');
  const home = useTranslations('Home');

  return (
    <section className="bg-gradient-to-br from-white via-brand-light to-white py-16">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark">
            O’Brunch • Le Landeron
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            {hero('title')}
          </h1>
          <p className="text-base text-slate-700 md:text-lg">{hero('subtitle')}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/menu"
              className="rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-dark/20 transition hover:bg-brand-dark/90"
            >
              {hero('cta')}
            </Link>
            <Link
              href="/reservation"
              className="rounded-full border border-brand-dark px-6 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
            >
              {home('ctaReservation')}
            </Link>
          </div>
        </div>
        <div className="relative h-72 w-full overflow-hidden rounded-3xl shadow-xl shadow-brand-dark/20 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80"
            alt="Brunch gourmand"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
