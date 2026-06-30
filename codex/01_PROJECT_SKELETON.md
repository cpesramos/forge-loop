# Codex Task 01 — Project Skeleton

```text
Create the initial Forge Loop project skeleton.

Goal:
Set up a Vite + React + TypeScript project for a small grid-based forge roguelite prototype.

Context:
Forge Loop is a solo side-project. Prioritise clean architecture, fast iteration, and testability. This is not a polished game yet.

Read first:
- README.md
- docs/PRODUCT_BRIEF.md
- docs/GAME_DESIGN.md
- docs/TECHNICAL_PLAN.md
- docs/MVP_BACKLOG.md
- docs/SCOPE_RULES.md

Implementation requirements:
- Create Vite + React + TypeScript structure if it does not exist.
- Add Vitest for unit tests.
- Add Tailwind only if trivial; otherwise use plain CSS and note it in README.
- Create the folder structure described in docs/TECHNICAL_PLAN.md.
- Add placeholder typed data for ingredients, machines, recipes, contracts, and upgrades.
- Add a basic app shell with:
  - title
  - contract panel placeholder
  - shop panel placeholder
  - 6x6 grid placeholder
  - resolve button placeholder
  - run summary placeholder

Engineering requirements:
- Keep game logic separate from UI.
- Do not put game rules directly inside React components.
- Use TypeScript types for all major game entities.
- Add at least one smoke test.

Non-goals:
- No final art.
- No sound.
- No animations.
- No backend.
- No live AI.
- No Steam integration.
- No mobile wrapper.

Validation:
- npm install succeeds.
- npm test succeeds.
- npm run build succeeds.
- README explains how to run the project.
```
