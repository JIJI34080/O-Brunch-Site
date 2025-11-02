export const locales = ['fr-CH', 'de-CH', 'it-CH', 'rm-CH', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr-CH';

export const localeLabels: Record<Locale, string> = {
  'fr-CH': 'Français',
  'de-CH': 'Deutsch',
  'it-CH': 'Italiano',
  'rm-CH': 'Rumantsch',
  en: 'English'
};
