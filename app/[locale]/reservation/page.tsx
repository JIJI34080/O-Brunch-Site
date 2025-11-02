import type {Metadata} from 'next';
import {getMessages} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';
import ReservationForm from '@/components/ReservationForm';
import {type Locale} from '@/locales/config';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const data = (messages as any)?.Metadata?.reservation ?? {};
  return {
    title: data.title,
    description: data.description
  };
}

export default function ReservationPage() {
  const reservation = useTranslations('Reservation');

  return (
    <section className="py-16">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">{reservation('intro')}</h1>
          <p className="text-slate-700">Rue du Marché 12, 2525 Le Landeron</p>
          <p className="text-slate-700">+41 32 000 00 00</p>
        </div>
        <div className="rounded-3xl bg-white/80 p-8 shadow-lg shadow-brand-dark/10">
          <ReservationForm />
        </div>
      </Container>
    </section>
  );
}
