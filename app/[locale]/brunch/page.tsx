import type {Metadata} from 'next';
import {getMessages} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';
import {type Locale} from '@/locales/config';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const data = (messages as any)?.Metadata?.brunch ?? {};
  return {
    title: data.title,
    description: data.description
  };
}

export default function BrunchPage() {
  const brunch = useTranslations('Brunch');
  const highlights = (brunch.raw('highlights') as string[]) ?? [];

  return (
    <section className="py-16">
      <Container className="space-y-12">
        <header className="mx-auto max-w-3xl text-center space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">{brunch('intro')}</h1>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl bg-white/80 p-8 shadow-lg shadow-brand-dark/10">
            <h2 className="text-xl font-semibold text-brand-dark">{brunch('callout')}</h2>
            <p className="text-slate-700">
              {brunch('intro')}
            </p>
          </div>
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="rounded-2xl bg-white/70 p-6 shadow-lg shadow-brand-dark/10">
                <span className="text-sm font-semibold uppercase tracking-wide text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
