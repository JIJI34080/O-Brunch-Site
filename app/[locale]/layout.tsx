import type {Metadata} from 'next';
import {ReactNode} from 'react';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import {defaultLocale, locales, type Locale} from '@/locales/config';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const dynamicParams = false;

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const metadata = (messages as any)?.Metadata ?? {};
  return {
    title: metadata.defaultTitle,
    description: metadata.defaultDescription,
    alternates: {
      canonical: params.locale === defaultLocale ? '/' : `/${params.locale}`
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: {locale: Locale};
}) {
  unstable_setRequestLocale(params.locale);

  const messages = await getMessages({locale: params.locale});

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <div className="flex min-h-screen flex-col" data-locale={params.locale}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
