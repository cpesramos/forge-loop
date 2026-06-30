# Codex Task 02 — Grid Logic

```text
Implement deterministic 6x6 grid logic for Forge Loop.

Goal:
Allow ingredients and machines to be placed, moved, and removed from a 6x6 grid.

Context:
The grid is the foundation of the game. Keep it pure, typed, and tested.

Likely files:
- src/game/types.ts
- src/game/logic/grid.ts
- src/game/logic/adjacency.ts
- src/game/tests/grid.test.ts

Requirements:
- Define GridState.
- Define GridPosition.
- Define GridItem.
- Implement createEmptyGrid.
- Implement isInBounds.
- Implement getCell.
- Implement placeItem.
- Implement removeItem.
- Implement moveItem.
- Prevent placement outside bounds.
- Prevent placement into occupied cells.
- Keep functions pure where practical.

Tests:
- creates 6x6 grid
- places item in empty valid cell
- rejects out-of-bounds placement
- rejects occupied cell placement
- removes existing item
- moving item succeeds
- moving into occupied cell fails
- moving out of bounds fails

Non-goals:
- No recipe resolution yet.
- No drag-and-drop.
- No UI polish.
```
