'use client';

import {FormEvent, useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ReservationForm() {
  const reservation = useTranslations('Reservation.form');
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
          {reservation('name')}
          <input
            name="name"
            className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
            required
          />
        </label>
        <label className="flex flex-col text-sm text-slate-700">
          {reservation('email')}
          <input
            type="email"
            name="email"
            className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <label className="flex flex-col text-sm text-slate-700">
          {reservation('date')}
          <input
            type="date"
            name="date"
            className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
            required
          />
        </label>
        <label className="flex flex-col text-sm text-slate-700">
          {reservation('time')}
          <input
            type="time"
            name="time"
            className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
            required
          />
        </label>
        <label className="flex flex-col text-sm text-slate-700">
          {reservation('guests')}
          <input
            type="number"
            name="guests"
            min={1}
            max={12}
            className="mt-1 rounded-lg border border-brand-dark/30 bg-white px-4 py-2 focus:border-brand-dark focus:outline-none"
            required
          />
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex rounded-full bg-brand-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark/90"
      >
        {reservation('submit')}
      </button>
      {status !== 'idle' ? (
        <p className={`text-sm ${status === 'success' ? 'text-emerald-600' : 'text-rose-600'}`}>
          {status === 'success' ? feedback('success') : feedback('required')}
        </p>
      ) : null}
    </form>
  );
}
