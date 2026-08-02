---
title: "SaaS Quick Ratio Benchmarks by ARR Stage"
description: "Mamoon Hamid's SaaS quick ratio measures how efficiently you grow. Here are benchmark bands by ARR stage and what breaks them."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "quick-ratio"
  label: "SaaS Quick Ratio Calculator"
sources:
  - label: "Mamoon Hamid: SaaS Quick Ratio"
    url: "https://www.saastr.com/the-saas-quick-ratio-a-single-metric-that-matters/"
  - label: "ProfitWell: Quick Ratio Deep Dive"
    url: "https://www.profitwell.com/"
  - label: "OpenView SaaS Benchmarks"
    url: "https://openviewpartners.com/"
faqs:
  - q: "Is 4x really the elite threshold?"
    a: "It was in Mamoon's original framing (2015). Today's top quartile at $10M ARR is closer to 3-4x. The concept still holds; the specific bar drifts."
  - q: "Why include contraction with churn?"
    a: "Because both are lost MRR. A customer downgrading from $500 to $200 is $300 of MRR you no longer have."
  - q: "How is this different from NRR?"
    a: "NRR is net retention across existing customers. Quick ratio includes new logos in the numerator. Quick ratio is broader; NRR is retention-only."
  - q: "Should I calculate this monthly or quarterly?"
    a: "Monthly with a trailing 3-month average. Single months spike on one enterprise deal."
  - q: "Can quick ratio go infinite?"
    a: "Yes, if you have any gains and zero losses in a period. Rare past seed."
related: ["quick-ratio", "ltv-cac", "mrr-arr-growth"]
---

## TL;DR

Quick ratio = (new MRR + expansion MRR) / (churned MRR + contraction MRR). Above 4 is excellent, 2–4 is good, below 2 signals a leaky bucket.

## The bands, by stage

Approximate top-quartile bars from OpenView and public disclosures:

| ARR         | Excellent | Good | Weak |
|-------------|-----------|------|------|
| < $1M       | > 6       | 4–6  | < 4  |
| $1M – $10M  | > 4       | 2–4  | < 2  |
| $10M – $50M | > 3       | 2–3  | < 2  |
| $50M+       | > 2.5     | 1.5–2.5 | < 1.5 |

The bar drops with scale because churn is denominated in dollars, not customers, and dollar churn grows with the base.

## Worked example

A $2M ARR company in one month:

- New MRR: $18,000
- Expansion MRR: $6,000
- Churned MRR: $4,500
- Contraction MRR: $2,000

Quick ratio = (18,000 + 6,000) / (4,500 + 2,000) = 24,000 / 6,500 = 3.7x. Good, not great. Net new MRR: $17,500.

Try it in the [quick ratio calculator](/calculators/quick-ratio).

## What breaks a good quick ratio

**A single enterprise cancellation.** Loses $30k+ of MRR at once. A 4x ratio drops to 1x for that month.

**Price migration.** Grandfathered customers move to a lower tier during a repricing. Contraction spikes; the numerator stays flat.

**Payment failures.** Involuntary churn from failed cards is real churn on the books. Dunning fixes half of it; the other half is truly lost.

## What quietly inflates it

**Price increases on existing customers.** Registered as expansion, but not from usage. Investors will discount it.

**Reactivations booked as new logos.** Same customer, different subscription record. Clean up your cohort definitions.

**Deferred revenue amortization.** If you count contract value at booking, quick ratio looks better than the cash reality.

## Common mistakes

- Comparing a $2M ARR company's quick ratio to a $200M ARR company's.
- Reporting a single month without a trailing average.
- Excluding failed payment recovery from churn.
- Treating expansion from price increases the same as usage-driven expansion.

## Related

- [Quick Ratio Calculator](/calculators/quick-ratio)
- [LTV / CAC](/calculators/ltv-cac) — retention drives LTV directly
- [MRR / ARR Growth](/calculators/mrr-arr-growth)
