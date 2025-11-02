import type {Metadata} from 'next';
import {getMessages} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';
import {type Locale} from '@/locales/config';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const data = (messages as any)?.Metadata?.about ?? {};
  return {
    title: data.title,
    description: data.description
  };
}

export default function AboutPage() {
  const about = useTranslations('About');
  const values = (about.raw('values') as string[]) ?? [];

  return (
    <section className="py-16">
      <Container className="space-y-12">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">{about('storyTitle')}</h1>
          <p className="text-slate-700">{about('story')}</p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl bg-white/80 p-8 shadow-lg shadow-brand-dark/10">
            <h2 className="text-xl font-semibold text-brand-dark">{about('teamTitle')}</h2>
            <p className="text-slate-700">{about('team')}</p>
          </div>
          <div className="space-y-4 rounded-3xl bg-white/80 p-8 shadow-lg shadow-brand-dark/10">
            <h2 className="text-xl font-semibold text-brand-dark">{about('valuesTitle')}</h2>
            <ul className="space-y-2">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3 text-slate-700">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark/10 text-brand-dark">
                    ✓
                  </span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
