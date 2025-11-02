'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import Link from 'next-intl/link';
import {usePathname} from 'next-intl/client';

import Container from '@/components/Container';
import LocaleSwitcher from '@/components/LocaleSwitcher';

const navItems = [
  {href: '/', key: 'home'},
  {href: '/menu', key: 'menu'},
  {href: '/brunch', key: 'brunch'},
  {href: '/galerie', key: 'gallery'},
  {href: '/a-propos', key: 'about'},
  {href: '/contact', key: 'contact'},
  {href: '/reservation', key: 'reservation'},
  {href: '/mentions-legales', key: 'legal'}
] as const;

function normalizePath(pathname: string | null) {
  if (!pathname) return '/';
  const withoutLocale = pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?(?=\/|$)/, '') || '/';
  return withoutLocale;
}

export default function Header() {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const normalizedPath = useMemo(() => normalizePath(pathname), [pathname]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-brand-light/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-brand-dark" onClick={closeMenu}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark text-white">
            O’B
          </span>
          <span>O’Brunch</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => {
            const target = item.href === '/' ? '/' : item.href;
            const isActive =
              normalizedPath === target || (target !== '/' && normalizedPath.startsWith(`${target}/`));
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`transition hover:text-brand-dark ${isActive ? 'text-brand-dark' : ''}`.trim()}
              >
                {t(item.key)}
              </Link>
            );
          })}
          <LocaleSwitcher />
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-brand-dark/30 p-2 text-brand-dark md:hidden"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Container>
      {isOpen ? (
        <div className="border-t border-white/40 bg-brand-light md:hidden">
          <Container className="flex flex-col gap-4 py-4 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} onClick={closeMenu} className="hover:text-brand-dark">
                {t(item.key)}
              </Link>
            ))}
            <LocaleSwitcher />
          </Container>
        </div>
      ) : null}
    </header>
  );
}
