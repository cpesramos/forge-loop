import type { Grid } from '../types';

export const GRID_SIZE = 6;

export function createEmptyGrid(size = GRID_SIZE): Grid {
  return Array.from({ length: size }, (_, row) =>
    Array.from({ length: size }, (_, column) => ({
      position: {
        row,
        column,
      },
      entity: null,
    })),
  );
}
