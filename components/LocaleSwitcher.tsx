'use client';

import {ChangeEvent} from 'react';
import {usePathname, useRouter} from 'next-intl/client';
import {useLocale} from 'next-intl';

import {localeLabels, locales, type Locale} from '@/locales/config';

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;
    router.replace(pathname, {locale: nextLocale});
  };

  return (
    <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
      <span className="sr-only">Select language</span>
      <select
        className="rounded-md border border-brand-dark/30 bg-white px-3 py-1 text-sm shadow-sm focus:border-brand-dark focus:outline-none"
        value={locale}
        onChange={handleChange}
      >
        {locales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
