import type {Metadata} from 'next';
import {getMessages} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';
import {type Locale} from '@/locales/config';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const data = (messages as any)?.Metadata?.legal ?? {};
  return {
    title: data.title,
    description: data.description
  };
}

export default function LegalPage() {
  const legal = useTranslations('Legal');

  return (
    <section className="py-16">
      <Container className="space-y-6">
        <h1 className="text-3xl font-semibold text-slate-900">{legal('company')}</h1>
        <p className="text-slate-700">{legal('address')}</p>
        <p className="text-slate-700">{legal('vat')}</p>
        <p className="text-slate-700">{legal('contact')}</p>
        <p className="rounded-3xl bg-white/80 p-6 text-sm text-slate-600 shadow-lg shadow-brand-dark/10">{legal('content')}</p>
      </Container>
    </section>
  );
}
