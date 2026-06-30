# Forge Loop

Forge Loop is a compact Steam-first grid roguelite prototype where players place forge machines and ingredients on a 6x6 grid to fulfil magical crafting contracts across short replayable runs.

## Product direction

Forge Loop is **web-first for prototype validation** and **Steam-first for commercialisation**.

It is **not App Store-first**. Mobile is a post-validation port only if the core loop proves strong replayability.

## Core loop

1. Start a run.
2. Receive a crafting contract.
3. Buy/place/remove ingredients and forge machines on a 6x6 grid.
4. Resolve the forge.
5. Complete or fail the contract.
6. Choose one upgrade.
7. Repeat for 5 contracts.
8. End the run with score, gold, and summary.

## Prototype success criteria

Continue only if:

- The player understands the core loop within 2 minutes.
- A full run takes 5–10 minutes.
- The player makes at least 3 meaningful decisions per run.
- The developer personally wants to replay it.
- At least 3 of 5 testers say they would play another run.

## Current strategy

```text
Project setup → skeleton → grid logic → recipe resolution → contract loop → shop/upgrades → playtest
```

## Tech recommendation

- TypeScript
- React
- Vite
- Vitest
- CSS or Tailwind
- Local-only state first
- No backend
- No database
- No live services

## Hard no-go list for v0.1

Do not build these in the prototype:

- mobile app wrapper
- multiplayer
- account system
- backend
- live AI integration
- final art
- sound polish
- Steam page
- large lore system
- procedural world map
- daily challenge system
- leaderboards
- monetisation

## First Codex task

Start with:

```text
codex/01_PROJECT_SKELETON.md
```

## Local development

Install dependencies:

```bash
npm install
```

Run the browser prototype:

```bash
npm run dev
```

Run tests:

```bash
npm test
```

Create a production build:

```bash
npm run build
```

The current app is only the initial project skeleton. It shows an ugly 6x6 grid shell, placeholder panels, typed placeholder data, and the first pure grid helper. Recipes, contract resolution, shop logic, upgrades, persistence, and the final gameplay loop are intentionally not implemented yet.
