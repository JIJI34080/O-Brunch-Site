import Link from 'next-intl/link';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';

const socialLinks = [
  {href: 'https://www.instagram.com', label: 'Instagram'},
  {href: 'https://www.facebook.com', label: 'Facebook'}
];

export default function Footer() {
  const footer = useTranslations('Footer');
  const navigation = useTranslations('Navigation');

  return (
    <footer className="border-t border-white/60 bg-white/80 py-10 text-sm text-slate-700">
      <Container className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-semibold text-brand-dark">O’Brunch</p>
          <p className="mt-2 text-slate-600">{footer('hoursTitle')}</p>
          <p>{footer('hours')}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-dark">{footer('addressTitle')}</p>
          <p className="mt-1 text-slate-600">{footer('address')}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-dark">{footer('followUs')}</p>
          <ul className="mt-2 space-y-1">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="mt-8 flex flex-col gap-2 border-t border-white/60 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} O’Brunch. Tous droits réservés.</p>
        <Link href="/mentions-legales" className="hover:text-brand-dark">
          {navigation('legal')}
        </Link>
      </Container>
    </footer>
  );
}
