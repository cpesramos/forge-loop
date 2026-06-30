export type IngredientId =
  | 'iron_ore'
  | 'copper_ore'
  | 'ember_crystal'
  | 'moon_salt'
  | 'oak_charcoal'
  | 'spring_water';

export type MachineId = 'furnace' | 'anvil' | 'infuser' | 'quench_barrel';

export type RecipeId = string;
export type ContractId = string;
export type UpgradeId =
  | 'extra_coins'
  | 'cheaper_machine'
  | 'furnace_diagonal'
  | 'blade_bonus'
  | 'double_infuser'
  | 'penalty_shield'
  | 'contract_preview'
  | 'scrap_sale';

export interface GridPosition {
  row: number;
  column: number;
}

export type GridEntity =
  | {
      kind: 'ingredient';
      id: IngredientId;
    }
  | {
      kind: 'machine';
      id: MachineId;
    };

export interface GridCell {
  position: GridPosition;
  entity: GridEntity | null;
}

export type Grid = GridCell[][];

export interface Ingredient {
  id: IngredientId;
  name: string;
  tags: string[];
}

export interface Machine {
  id: MachineId;
  name: string;
  effect: string;
}

export interface Recipe {
  id: RecipeId;
  output: string;
  description: string;
}

export interface Contract {
  id: ContractId;
  name: string;
  targetOutput: string;
  rewardCoins: number;
  penaltyCoins: number;
}

export interface Upgrade {
  id: UpgradeId;
  name: string;
  effect: string;
}
