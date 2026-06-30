# Codex Task 04 — Contract and Run Loop

```text
Implement the basic 5-contract roguelite run loop.

Goal:
Make Forge Loop playable from run start to run summary.

Context:
The prototype should now allow a player to complete or fail contracts and finish a run.

Likely files:
- src/game/data/contracts.ts
- src/game/data/upgrades.ts
- src/game/logic/contractResolver.ts
- src/game/logic/economy.ts
- src/game/logic/runState.ts
- src/game/tests/contractResolver.test.ts
- src/game/tests/economy.test.ts
- src/game/tests/runState.test.ts
- src/ui/App.tsx

Requirements:
- Start a run with starting coins.
- Select one active contract.
- Resolve the grid against the contract.
- On success:
  - grant reward coins
  - increment completed count
  - offer upgrade choice
- On failure:
  - apply penalty
  - continue to next contract
- End run after 5 contracts.
- Show run summary with:
  - completed contracts
  - remaining coins
  - score
  - win/loss state
- Add restart run action.

Tests:
- successful contract grants coins
- failed contract applies penalty
- completed count increments
- run advances to next contract
- run ends after 5 contracts
- win if 4+ completed
- loss if fewer than 4 completed

Non-goals:
- No persistence.
- No backend.
- No daily mode.
- No monetisation.
```
