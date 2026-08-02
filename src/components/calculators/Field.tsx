import type { ChangeEvent } from 'react';

type Props = {
  id: string;
  label: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
  prefix?: string;
  step?: number;
  min?: number;
  hint?: string;
};

export function Field({ id, label, value, onChange, suffix, prefix, step = 1, min, hint }: Props) {
  return (
    <div>
      <label htmlFor={id} className="calc-label">{label}</label>
      <div className="mt-1 flex items-stretch rounded-md border border-ink-200 bg-white focus-within:border-accent-500 focus-within:ring-2 focus-within:ring-accent-500/20">
        {prefix && <span className="inline-flex items-center px-3 text-ink-500 text-sm border-r border-ink-200">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step={step}
          min={min}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const n = Number(e.target.value);
            onChange(Number.isFinite(n) ? n : 0);
          }}
          className="w-full bg-transparent px-3 py-2 text-ink-900 outline-none"
        />
        {suffix && <span className="inline-flex items-center px-3 text-ink-500 text-sm border-l border-ink-200">{suffix}</span>}
      </div>
      {hint && <p className="calc-hint">{hint}</p>}
    </div>
  );
}

export function Stat({ label, value, hint, tone = 'default' }: { label: string; value: string; hint?: string; tone?: 'default' | 'good' | 'warn' | 'bad' }) {
  const toneClass = {
    default: 'text-ink-900',
    good: 'text-emerald-700',
    warn: 'text-amber-700',
    bad: 'text-rose-700',
  }[tone];
  return (
    <div className="rounded-md border border-ink-200 bg-white p-4">
      <div className="calc-stat-label">{label}</div>
      <div className={`calc-stat-value mt-1 ${toneClass}`}>{value}</div>
      {hint && <div className="mt-1 text-xs text-ink-500">{hint}</div>}
    </div>
  );
}
