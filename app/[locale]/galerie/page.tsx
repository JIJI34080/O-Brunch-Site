import type {Metadata} from 'next';
import Image from 'next/image';
import {getMessages} from 'next-intl/server';
import {useTranslations} from 'next-intl';

import Container from '@/components/Container';
import {type Locale} from '@/locales/config';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const messages = await getMessages({locale: params.locale});
  const data = (messages as any)?.Metadata?.gallery ?? {};
  return {
    title: data.title,
    description: data.description
  };
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80',
    alt: 'Table de brunch colorée'
  },
  {
    src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&q=80',
    alt: 'Gaufres croustillantes'
  },
  {
    src: 'https://images.unsplash.com/photo-1528698923950-22a9f627f3e5?auto=format&fit=crop&w=1600&q=80',
    alt: 'Boissons artisanales'
  },
  {
    src: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Snack gourmet'
  }
];

export default function GalleryPage() {
  const gallery = useTranslations('Gallery');

  return (
    <section className="py-16">
      <Container className="space-y-10">
        <header className="mx-auto max-w-3xl text-center space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900">{gallery('intro')}</h1>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand-dark/10"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 to-transparent p-4 text-sm font-medium text-white">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
