import createMiddleware from 'next-intl/middleware';

import {defaultLocale, locales} from './locales/config';

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  matcher: ['/((?!_next|favicon.ico|sitemap.xml|robots.txt|.*\\.png).*)']
};
