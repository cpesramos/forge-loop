import type { Machine } from '../types';

export const machines: Machine[] = [
  {
    id: 'furnace',
    name: 'Furnace',
    effect: 'Smelts adjacent raw metal',
  },
  {
    id: 'anvil',
    name: 'Anvil',
    effect: 'Shapes adjacent metal outputs',
  },
  {
    id: 'infuser',
    name: 'Infuser',
    effect: 'Adds magic to adjacent outputs',
  },
  {
    id: 'quench_barrel',
    name: 'Quench Barrel',
    effect: 'Stabilises hot crafted items',
  },
];
