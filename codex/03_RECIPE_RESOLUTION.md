# Codex Task 03 — Recipe Resolution

```text
Implement recipe resolution for Forge Loop.

Goal:
Resolve crafted outputs from ingredient and machine adjacency using data-driven recipes.

Context:
Resolution must be deterministic and testable. Start with orthogonal adjacency only.

Likely files:
- src/game/data/ingredients.ts
- src/game/data/machines.ts
- src/game/data/recipes.ts
- src/game/logic/adjacency.ts
- src/game/logic/recipeResolver.ts
- src/game/tests/recipeResolver.test.ts

Requirements:
- Implement orthogonal adjacency helpers.
- Read ingredients and machines from the grid.
- Match recipes based on required ingredient/machine relationships.
- Return a list of crafted outputs.
- Include explanation/debug info for why outputs were produced.
- Support the 10 initial recipes from docs/GAME_DESIGN.md.

Tests:
- Iron Ingot recipe succeeds.
- Copper Ingot recipe succeeds.
- Iron Blade recipe succeeds.
- Copper Charm recipe succeeds.
- Ember Blade recipe succeeds.
- Moon Charm recipe succeeds.
- Tempered Blade recipe succeeds.
- Steam Rune recipe succeeds.
- Charcoal Heat recipe succeeds.
- Lunar Steel recipe succeeds.
- Non-matching layout produces no output.

Non-goals:
- No diagonal adjacency.
- No chain reactions unless required for listed recipes.
- No animations.
- No economy.
```
