import { useCallback, useEffect, useState } from 'react';

export function useUrlState<T extends Record<string, number>>(defaults: T): [T, (patch: Partial<T>) => void] {
  const [state, setState] = useState<T>(() => {
    if (typeof window === 'undefined') return defaults;
    const p = new URLSearchParams(window.location.search);
    const next: Record<string, number> = { ...defaults };
    for (const k of Object.keys(defaults)) {
      const raw = p.get(k);
      if (raw !== null && raw !== '') {
        const n = Number(raw);
        if (Number.isFinite(n)) next[k] = n;
      }
    }
    return next as T;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const p = new URLSearchParams();
    for (const k of Object.keys(state)) {
      const v = (state as Record<string, number>)[k];
      if (Number.isFinite(v) && v !== (defaults as Record<string, number>)[k]) {
        p.set(k, String(v));
      }
    }
    const qs = p.toString();
    const next = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
    window.history.replaceState(null, '', next);
  }, [state, defaults]);

  const patch = useCallback((update: Partial<T>) => {
    setState((s) => ({ ...s, ...update }));
  }, []);

  return [state, patch];
}

export function numInput(raw: string): number {
  if (raw === '' || raw === '-') return 0;
  const cleaned = raw.replace(/,/g, '');
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}
