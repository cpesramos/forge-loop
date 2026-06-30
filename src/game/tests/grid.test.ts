import { describe, expect, it } from 'vitest';
import { createEmptyGrid } from '../logic/grid';

describe('createEmptyGrid', () => {
  it('creates 6 rows', () => {
    expect(createEmptyGrid()).toHaveLength(6);
  });

  it('creates 6 cells in each row', () => {
    const grid = createEmptyGrid();

    expect(grid.every((row) => row.length === 6)).toBe(true);
  });

  it('creates 36 total cells', () => {
    const grid = createEmptyGrid();
    const totalCells = grid.reduce((count, row) => count + row.length, 0);

    expect(totalCells).toBe(36);
  });
});
