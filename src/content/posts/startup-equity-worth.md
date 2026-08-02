---
title: "Is My Startup Equity Actually Worth Anything?"
description: "The realistic value of a startup option grant depends on strike, FMV, future dilution, and exit valuation. Here is the math and the honest expectation."
publishedAt: "2026-08-02"
pairedCalculator:
  slug: "option-value"
  label: "Employee Stock Option Value Calculator"
sources:
  - label: "Holloway Guide to Equity Compensation"
    url: "https://www.holloway.com/g/equity-compensation"
  - label: "Carta: Option Grants"
    url: "https://carta.com/learn/equity/stock-options/"
  - label: "Sam Altman: Employee Equity"
    url: "https://blog.samaltman.com/employee-equity"
faqs:
  - q: "Should I exercise early?"
    a: "Depends on strike, AMT exposure, personal cash, and belief in exit. Talk to a CPA who knows startup comp. Getting the LTCG clock running has real value."
  - q: "What is a fair grant size for the first ten employees?"
    a: "In the US: employee #1-3 usually 1-2%; #4-10 usually 0.5-1%; each halves the next tier. Roles matter more than order."
  - q: "Why does my grant get smaller each round?"
    a: "Because the pool refreshes at each round and the FMV goes up, so the same option pool covers fewer new shares in percentage terms."
  - q: "Should I trust the 409A?"
    a: "It is a defensible number, not a market price. Recent secondary transactions are usually higher."
  - q: "What about ISO vs NSO?"
    a: "ISOs have favorable tax treatment (capital gains if held) but can trigger AMT. NSOs are simpler and immediately ordinary income at exercise. Foreign employees usually get NSOs."
related: ["option-value", "cap-table-dilution", "seed-round"]
---

## TL;DR

Paper value today = shares × (409A − strike). Exit value = shares × (exit valuation × (1 − future dilution) / current shares outstanding) − shares × strike. Both are before taxes. Most startup equity ends up worth zero.

## The formula, plainly

**Paper value today** is what you'd realize if you exercised and the company had a liquidity event at today's 409A. It's a hypothetical; nobody buys secondary at 409A.

**Exit value** projects your shares to a liquidity event. Two things reduce it: future dilution (every round you weren't part of), and strike (what you pay to convert options to shares).

## Worked example

A senior engineer's grant at a Series A company:

- Strike: $0.80
- Current 409A: $2.10
- Shares granted: 50,000
- Vesting: 4 years
- Expected exit valuation: $400M
- Expected future dilution before exit: 35%
- Shares outstanding today: 20M

Paper value today = 50,000 × ($2.10 − $0.80) = **$65,000**.

Effective ownership at exit = (50,000 / 20,000,000) × (1 − 0.35) = 0.163%.

Exit value gross = $400M × 0.163% = **$651,625**. Net of strike ($40,000 to exercise) = **$611,625**.

Before taxes. See the [option value calculator](/calculators/option-value).

## The distribution nobody shows you

- ~65% of venture-backed startups return zero to common stock (Cambridge Associates historical).
- ~25% return less than the strike cost or barely above.
- ~10% deliver a meaningful outcome.

The right way to think about the number above: it's the value in the ~10% scenario. Multiply by 0.1 for expected value.

## What makes it worth more

- Grants early enough that dilution is small.
- Companies that actually exit within your vesting horizon.
- Products that reach a genuine outcome (not a $50M acqui-hire that returns preferred first).
- Being at a company that grants refresh grants regularly.

## What makes it worth less

- Multiple down rounds with anti-dilution provisions that leave common holders behind.
- Long paths to liquidity (private for 12+ years is now normal).
- Preferred stock stack that eats the exit in a small M&A outcome.
- Grants that vest post-acquisition into whatever the acquirer offers.

## Common mistakes

- Forgetting the strike cost.
- Modeling gross exit value without preferred waterfall.
- Trusting the recruiter's "worth $X at IPO" number without checking dilution assumptions.
- Ignoring taxes.
- Not exercising vested options within the 90-day window post-departure (loses ISO status; often loses the shares entirely).

## Related

- [Option Value Calculator](/calculators/option-value)
- [Cap Table Dilution](/calculators/cap-table-dilution) — see how each round diluted your grant
- [Seed Round Sizing](/calculators/seed-round) — for founders sizing pool allocations
