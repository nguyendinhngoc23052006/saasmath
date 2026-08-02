---
title: "Founder Dilution: What to Expect Seed to Series B"
description: "How much of your company you keep after seed, A, and B. Standard ranges, option pool traps, and the levers founders actually control."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "cap-table-dilution"
  label: "Cap Table Dilution Calculator"
sources:
  - label: "Carta: Dilution Explained"
    url: "https://carta.com/blog/dilution/"
  - label: "Y Combinator: SAFE Primer"
    url: "https://www.ycombinator.com/documents"
  - label: "Fred Wilson: Employee Equity"
    url: "https://avc.com/2010/11/employee-equity-how-much/"
faqs:
  - q: "Is 20% at seed a rule?"
    a: "It is a norm, not a rule. Hot rounds close at 10-15%. Slower rounds at 25-30%. Solo GP checks sometimes sit at 5%."
  - q: "Can I negotiate the option pool?"
    a: "Yes. Ask for a smaller pool (only what will be granted before Series A), post-money treatment, or shifted post-close."
  - q: "How much do co-founders typically hold at Series B?"
    a: "Collectively 35-55% is normal. Below 25% often triggers a governance conversation with the board."
  - q: "What about super-pro-rata?"
    a: "Not standard at seed; common at Series A onward. It reserves the right to invest above pro-rata in future rounds, protecting an investor from dilution."
  - q: "Does SAFE conversion count as its own round?"
    a: "No. SAFEs convert at the next priced round. Model the priced round with all SAFEs on the cap table before running dilution numbers."
related: ["cap-table-dilution", "seed-round", "option-value"]
---

## TL;DR

Typical founder dilution: seed ~20%, Series A ~22%, Series B ~18%. After three rounds, founders keep roughly 40-55% collectively.

## The formula

`post_money = pre + round`. `new_investor_pct = round / post_money`. If the option pool expands `p%` pre-money, founder dilution = `new_investor_pct + p`.

## Worked example: a "normal" path

- Seed: raise $2M at $8M pre, 10% option pool top-up. Post-money $10M. Investor 20%. Pool 10%. Founder dilution: 30%.
- Series A: raise $10M at $30M pre, 5% top-up. Post-money $40M. Investor 25%. Pool 5%. Existing dilution: 30%.
- Series B: raise $25M at $100M pre, 3% top-up. Post-money $125M. Investor 20%. Pool 3%. Dilution: 23%.

Starting founder ownership 100% → after seed 70% → after A 49% → after B 37.7%. Split across two co-founders: ~19% each remaining.

Try it in the [cap table calculator](/calculators/cap-table-dilution).

## Why option pool is a hidden dilution

Pre-money option pool expansion sits on the founders' side. Investors get their percentage post-money; the pool is bundled with the pre-money valuation. That means every 1% of pool top-up pre-round dilutes existing holders by 1%.

**The lever:** ask for the pool to be sized to grants planned in the next 12 months, not "for the next round". A 5% pool covers most seed teams to Series A. Anything above is a giveaway.

## Where founders lose more than they should

1. **Oversized bridges.** Bridge rounds with valuation caps below the last round convert into big dilution at the next priced round.
2. **Anti-dilution provisions.** Weighted-average and full-ratchet clauses can hit founders in a down round. Read the docs.
3. **Advisor equity.** 0.25-1% per advisor sounds small until you have five.
4. **Departed co-founders with un-vested acceleration.** Poor equity documents cost the remaining team.

## Where founders can hold more

- Raise less, tighter runway (harder now, but the equity cost of every extra dollar compounds).
- Bootstrap to real revenue before priced round; angel money buys time at lower dilution.
- Two-tranche seed: first close smaller, second close after a milestone at a higher valuation.
- Push option pool creation post-money (rare, but exists).

## Common mistakes

- Not modeling SAFE conversion before the priced round. Uncapped SAFEs surprise nobody; capped SAFEs at low caps eat into the priced-round dilution.
- Ignoring the effect of ISOs vs NSOs on the pool sizing math.
- Modeling investor stake without the option pool.
- Assuming pro-rata rights don't matter until they do (usually Series A onward).

## Related

- [Cap Table Dilution Calculator](/calculators/cap-table-dilution)
- [Seed Round Sizing](/calculators/seed-round)
- [Bridge Round Calculator](/calculators/bridge-round)
