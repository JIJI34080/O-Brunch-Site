import type {Metadata} from 'next';
import {getMessages} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';
import {menuCategories} from '@/data/menu';
import {type Locale} from '@/locales/config';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const data = (messages as any)?.Metadata?.menu ?? {};
  return {
    title: data.title,
    description: data.description
  };
}

export default function MenuPage() {
  const menu = useTranslations('Menu');

  return (
    <section className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold text-slate-900">{menu('intro')}</h1>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {menuCategories.map((category) => (
            <div key={category.id} className="rounded-3xl bg-white/80 p-8 shadow-lg shadow-brand-dark/10">
              <h2 className="text-xl font-semibold text-brand-dark">{menu(`sections.${category.id}`)}</h2>
              <ul className="mt-4 space-y-4">
                {category.items.map((item) => (
                  <li key={item.name} className="space-y-1">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-base font-medium text-slate-900">{item.name}</p>
                      <span className="text-sm font-semibold text-brand-dark">{item.price}</span>
                    </div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
