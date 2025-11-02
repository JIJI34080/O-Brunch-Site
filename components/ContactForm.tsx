'use client';

import {FormEvent, useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ContactForm() {
  const contact = useTranslations('Contact.form');
  const feedback = useTranslations('Forms');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const hasEmpty = Array.from(form.entries()).some(([, value]) => !value);
    if (hasEmpty) {
      setStatus('error');
      return;
    }
    setStatus('success');
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col text-sm text-slate-700">
          {contact('name')}
          <input
            name="name"
            className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
            required
          />
        </label>
        <label className="flex flex-col text-sm text-slate-700">
          {contact('email')}
          <input
            type="email"
            name="email"
            className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
            required
          />
        </label>
      </div>
      <label className="flex flex-col text-sm text-slate-700">
        {contact('message')}
        <textarea
          name="message"
          rows={5}
          className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
          required
        />
      </label>
      <button
        type="submit"
        className="inline-flex rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark/90"
      >
        {contact('submit')}
      </button>
      {status !== 'idle' ? (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
          {status === 'success' ? feedback('success') : feedback('required')}
        </p>
      ) : null}
    </form>
  );
}
