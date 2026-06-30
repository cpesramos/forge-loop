import { useMemo } from 'react';
import { createEmptyGrid } from '../game/logic/grid';
import { ContractPanel } from './ContractPanel';
import { GridView } from './GridView';
import { RunSummary } from './RunSummary';
import { ShopPanel } from './ShopPanel';

export function App() {
  const grid = useMemo(() => createEmptyGrid(), []);

  return (
    <main className="app-shell">
      <header className="app-header">
        <h1>Forge Loop</h1>
      </header>

      <section className="app-layout" aria-label="Forge Loop prototype shell">
        <ContractPanel />

        <section className="forge-area" aria-label="Forge grid">
          <h2>Forge Grid</h2>
          <GridView grid={grid} />
          <button className="resolve-button" type="button" disabled>
            Resolve Forge
          </button>
          <RunSummary />
        </section>

        <ShopPanel />
      </section>
    </main>
  );
}
