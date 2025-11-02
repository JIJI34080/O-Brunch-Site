import type {MetadataRoute} from 'next';

import {locales} from '@/locales/config';

const routes = ['/', '/menu', '/brunch', '/galerie', '/a-propos', '/contact', '/reservation', '/mentions-legales'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://obrunch.vercel.app';

  return routes.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: new Date().toISOString(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${baseUrl}/${locale}${route === '/' ? '' : route}`])
      )
    }
  }));
}
