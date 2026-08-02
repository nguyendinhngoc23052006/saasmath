---
title: "LTV/CAC Ratio Explained: The 3:1 Rule and When It Lies"
description: "The 3:1 target from David Skok is a benchmark, not a law. Here is how the formula actually works, when a lower ratio is fine, and when 3:1 is a trap."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "ltv-cac"
  label: "LTV / CAC Ratio Calculator"
sources:
  - label: "David Skok: SaaS Metrics 2.0"
    url: "https://www.forentrepreneurs.com/saas-metrics-2/"
  - label: "Bessemer: CAC Payback Period"
    url: "https://www.bvp.com/atlas/cac-payback-period"
  - label: "a16z: 16 Startup Metrics"
    url: "https://a16z.com/16-startup-metrics/"
faqs:
  - q: "Should I use monthly or annual churn?"
    a: "Monthly for SMB; annual (converted to monthly) for enterprise. The formula uses monthly; annual churn / 12 is a decent approximation."
  - q: "What if my LTV is infinite?"
    a: "It means monthly churn rounds to zero, which is either brilliant (net revenue retention above 100%) or a measurement artifact. Use a floor churn of 0.5-1% for planning."
  - q: "Does 3:1 hold for enterprise SaaS?"
    a: "Enterprise runs higher: 5:1 or better because CAC is huge and churn is low. If enterprise LTV/CAC is 3:1 with 24-month payback, something is wrong."
  - q: "How do I include expansion revenue?"
    a: "Raise ARPU to reflect net revenue retention. If NRR is 120%, use ARPU × 1.2 or bake it into a negative churn number."
  - q: "Is CAC payback a better metric?"
    a: "For cash-constrained companies, yes. LTV/CAC assumes you have the runway to wait for lifetime; payback is the number that keeps the lights on."
related: ["ltv-cac", "quick-ratio", "mrr-arr-growth"]
---

## TL;DR

`LTV = (ARPU × gross_margin) / monthly_churn`. `LTV / CAC ≥ 3` and `CAC payback ≤ 18 months` is the healthy zone. Both conditions matter.

## Where the formula comes from

Under a constant-churn assumption, expected customer lifetime is `1 / monthly_churn`. Contribution per month is `ARPU × gross_margin`. Multiply and you get lifetime contribution: LTV.

## Worked example

A B2B SaaS:

- ARPU: $500/month
- Gross margin: 82%
- Monthly churn: 1.8%
- CAC: $2,400

Contribution per month = $500 × 0.82 = $410. LTV = $410 / 0.018 ≈ $22,800. Ratio = 22,800 / 2,400 = 9.5x. Payback = 2,400 / 410 ≈ 5.9 months.

Excellent. See it in the [calculator](/calculators/ltv-cac).

## When 3:1 lies

**Long payback with a great ratio.** A ratio of 5:1 with 30-month payback means you are financing your customers for two-and-a-half years. If runway runs out, the ratio doesn't matter.

**Infinite LTV from tiny churn.** A 0.3% churn produces enormous LTV, but three churned customers this month might be measurement noise. Floor churn for planning purposes.

**Gross-margin games.** LTV is contribution-margin based. If gross margin is 40% (unusual for SaaS but common for services-heavy businesses), the ratio compresses fast.

**Cohort mixing.** Blended ARPU across a SMB tier and an enterprise tier inflates the average and hides that the SMB CAC is not being recovered.

## When lower than 3:1 is fine

- Very early stage, when CAC includes sunk experimentation costs.
- Products with strong network effects where LTV grows non-linearly.
- Businesses shifting from paid acquisition to organic (blended CAC drops).

## Common mistakes

- Using revenue-multiple LTV instead of gross-margin LTV.
- Excluding sales team fully-loaded costs from CAC.
- Ignoring the cost of onboarding as part of CAC.
- Using LTV as a target instead of a leading indicator.
- Comparing your LTV/CAC to a public company's without normalizing for stage.

## Related

- [LTV / CAC Calculator](/calculators/ltv-cac)
- [Quick Ratio Calculator](/calculators/quick-ratio) — MRR gained vs lost
- [MRR / ARR Growth](/calculators/mrr-arr-growth) — extrapolate the ratio into growth
