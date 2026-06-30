import type { Grid } from '../game/types';

interface GridViewProps {
  grid: Grid;
}

export function GridView({ grid }: GridViewProps) {
  return (
    <div className="grid" role="grid" aria-label="6 by 6 forge grid">
      {grid.flat().map((cell) => (
        <div
          className="grid-cell"
          key={`${cell.position.row}-${cell.position.column}`}
          role="gridcell"
          aria-label={`Empty cell row ${cell.position.row + 1}, column ${
            cell.position.column + 1
          }`}
        >
          {cell.position.row + 1},{cell.position.column + 1}
        </div>
      ))}
    </div>
  );
}
