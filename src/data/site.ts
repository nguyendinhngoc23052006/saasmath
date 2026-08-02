export const SITE = {
  name: 'saasmath',
  title: 'saasmath — free calculators for SaaS founders',
  description:
    'Free calculators for SaaS founders and operators: runway, burn, LTV/CAC, MRR/ARR, dilution, option value, seed sizing. Formulas and worked examples included.',
  url: (import.meta as { env?: Record<string, string | undefined> }).env?.PUBLIC_SITE_URL || 'https://saasmath.com',
  locale: 'en-US',
  twitter: '',
  githubRepo: 'https://github.com/nguyendinhngoc23052006/saasmath',
} as const;

export const NAV = [
  { href: '/calculators', label: 'Calculators' },
  { href: '/posts', label: 'Writing' },
  { href: '/about', label: 'About' },
] as const;

export const ADSENSE_CLIENT =
  (import.meta as { env?: Record<string, string | undefined> }).env?.PUBLIC_ADSENSE_CLIENT || '';

export const CF_ANALYTICS_TOKEN =
  (import.meta as { env?: Record<string, string | undefined> }).env?.PUBLIC_CF_ANALYTICS_TOKEN || '';
