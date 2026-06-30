# Game Design — Forge Loop

## Design pillars

### 1. Readable systems

Players must understand why a contract succeeded or failed.

Bad:
- hidden calculations
- unclear chain reactions
- too many symbols

Good:
- clear adjacency rules
- visible machine effects
- simple result explanation

### 2. Short replayable runs

Prototype run length: 5–10 minutes.

The game should feel complete even with only 5 contracts.

### 3. Data-driven content

Ingredients, machines, recipes, contracts, and upgrades should be data-driven so content can be expanded safely.

### 4. Deterministic resolution

The same grid should produce the same result.

Randomness is allowed for:
- shop offers
- contract selection
- upgrade choices

Randomness is not allowed during forge resolution.

## Core loop

1. Contract appears.
2. Player buys/places forge pieces.
3. Player presses Resolve.
4. Game evaluates grid.
5. Contract succeeds or fails.
6. Player gets reward/penalty.
7. Player chooses upgrade if successful.
8. Next contract starts.
9. Run ends after 5 contracts.

## Initial ingredients

| ID | Name | Tags |
|---|---|---|
| iron_ore | Iron Ore | metal, raw |
| copper_ore | Copper Ore | metal, raw |
| ember_crystal | Ember Crystal | fire, magic |
| moon_salt | Moon Salt | lunar, reagent |
| oak_charcoal | Oak Charcoal | fuel, wood |
| spring_water | Spring Water | water, pure |

## Initial machines

| ID | Name | Effect |
|---|---|---|
| furnace | Furnace | Smelts adjacent raw metal |
| anvil | Anvil | Shapes adjacent metal outputs |
| infuser | Infuser | Adds magic to adjacent outputs |
| quench_barrel | Quench Barrel | Stabilises hot crafted items |

## Initial recipes

| Output | Basic condition |
|---|---|
| Iron Ingot | Iron Ore adjacent to Furnace |
| Copper Ingot | Copper Ore adjacent to Furnace |
| Iron Blade | Iron Ingot adjacent to Anvil |
| Copper Charm | Copper Ingot adjacent to Infuser |
| Ember Blade | Iron Blade adjacent to Ember Crystal and Infuser |
| Moon Charm | Copper Charm adjacent to Moon Salt |
| Tempered Blade | Iron Blade adjacent to Quench Barrel |
| Steam Rune | Spring Water adjacent to Furnace and Infuser |
| Charcoal Heat | Oak Charcoal adjacent to Furnace |
| Lunar Steel | Iron Ingot adjacent to Moon Salt and Quench Barrel |

## Initial upgrades

| ID | Name | Effect |
|---|---|---|
| extra_coins | Spare Purse | +2 starting coins next run or immediately in prototype |
| cheaper_machine | Salvage Dealer | First machine per contract costs 1 less |
| furnace_diagonal | Wide Furnace | Furnace affects diagonal neighbours |
| blade_bonus | Master Smith | Blade contracts pay +1 coin |
| double_infuser | Twin Infusion | Infuser can support two magic reagents |
| penalty_shield | Safety Tongs | Ignore one failed contract penalty |
| contract_preview | Ledger Sight | Reveal next contract |
| scrap_sale | Scrap Buyer | Sell unused ingredient for +1 coin |

## Prototype win/loss

- Run ends after 5 contracts.
- Win if 4+ contracts completed.
- Loss if fewer than 4 completed.
- Score = completed contracts × 10 + remaining coins + upgrade bonus.
