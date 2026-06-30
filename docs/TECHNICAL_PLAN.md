# Technical Plan — Forge Loop

## Recommended stack

- TypeScript
- React
- Vite
- Vitest
- CSS or Tailwind
- Local state first
- LocalStorage later if useful

## Architecture rule

Game logic must be separate from UI.

Good:
- pure functions
- typed data
- unit tests
- deterministic resolver

Bad:
- game rules embedded inside React components
- hidden randomness
- untested economy logic

## Suggested structure

```text
src/
  game/
    types.ts
    data/
      ingredients.ts
      machines.ts
      recipes.ts
      contracts.ts
      upgrades.ts
    logic/
      grid.ts
      adjacency.ts
      recipeResolver.ts
      contractResolver.ts
      economy.ts
      upgradeResolver.ts
      runState.ts
    tests/
      grid.test.ts
      recipeResolver.test.ts
      contractResolver.test.ts
      economy.test.ts
      upgradeResolver.test.ts
  ui/
    App.tsx
    GridView.tsx
    ShopPanel.tsx
    ContractPanel.tsx
    UpgradePicker.tsx
    RunSummary.tsx
```

## Resolution phases

1. Validate grid.
2. Identify item positions.
3. Identify machine adjacencies.
4. Resolve recipes.
5. Produce crafted outputs.
6. Check active contract.
7. Apply reward/penalty.
8. Apply upgrade effects.
9. Advance run state.

## Testing minimum

Before adding more content, tests must cover:

- valid placement
- invalid placement
- adjacency lookup
- each initial recipe
- contract success
- contract failure
- reward coins
- penalty coins
- upgrade effect
- run ends after 5 contracts

## Persistence

Do not add persistence until the loop is playable.

When added:
- LocalStorage only
- no backend
- no account system
