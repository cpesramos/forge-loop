# Codex Task 05 — Shop and Upgrades

```text
Implement the basic shop and upgrade system.

Goal:
Let players buy ingredients/machines and choose upgrades between contracts.

Context:
This is where Forge Loop should start feeling like a roguelite rather than a static puzzle.

Likely files:
- src/game/data/ingredients.ts
- src/game/data/machines.ts
- src/game/data/upgrades.ts
- src/game/logic/shop.ts
- src/game/logic/upgradeResolver.ts
- src/game/logic/economy.ts
- src/game/tests/shop.test.ts
- src/game/tests/upgradeResolver.test.ts
- src/ui/ShopPanel.tsx
- src/ui/UpgradePicker.tsx

Requirements:
- Add item costs.
- Generate a small shop offer each contract.
- Let player buy an item if they have enough coins.
- Deduct coins on purchase.
- Present 3 upgrade choices after successful contract.
- Apply selected upgrade to run state.
- Show active upgrades in UI.
- Implement at least 4 upgrade effects fully.

Tests:
- buying item deducts coins
- cannot buy without enough coins
- shop offer contains valid items
- upgrade can be selected
- upgrade modifies future rules
- active upgrades persist during run

Non-goals:
- No permanent meta progression.
- No unlocks.
- No shop reroll unless trivial.
- No monetisation.
```
