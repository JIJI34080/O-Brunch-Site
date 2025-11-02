import type {Metadata} from 'next';
import {ReactNode} from 'react';

import './globals.css';

import {defaultLocale} from '@/locales/config';

export const metadata: Metadata = {
  metadataBase: new URL('https://obrunch.vercel.app'),
  title: {
    default: 'O’Brunch - Brunch gourmand & halal à Neuchâtel',
    template: '%s | O’Brunch'
  },
  description:
    'O’Brunch est le restaurant brunch, snack & gaufres halal de référence au Landeron (Neuchâtel).',
  openGraph: {
    title: 'O’Brunch',
    description:
      'Brunch halal créatif, snacks et gaufres artisanales au Landeron, canton de Neuchâtel.',
    url: 'https://obrunch.vercel.app',
    siteName: 'O’Brunch',
    locale: defaultLocale,
    type: 'website'
  },
  icons: {
    icon: '/icon.svg'
  }
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className="min-h-screen bg-brand-light text-slate-900">
        {children}
      </body>
    </html>
  );
}
