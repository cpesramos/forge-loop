import type { Upgrade } from '../types';

export const upgrades: Upgrade[] = [
  {
    id: 'extra_coins',
    name: 'Spare Purse',
    effect: '+2 starting coins next run or immediately in prototype',
  },
  {
    id: 'cheaper_machine',
    name: 'Salvage Dealer',
    effect: 'First machine per contract costs 1 less',
  },
  {
    id: 'furnace_diagonal',
    name: 'Wide Furnace',
    effect: 'Furnace affects diagonal neighbours',
  },
  {
    id: 'blade_bonus',
    name: 'Master Smith',
    effect: 'Blade contracts pay +1 coin',
  },
  {
    id: 'double_infuser',
    name: 'Twin Infusion',
    effect: 'Infuser can support two magic reagents',
  },
  {
    id: 'penalty_shield',
    name: 'Safety Tongs',
    effect: 'Ignore one failed contract penalty',
  },
  {
    id: 'contract_preview',
    name: 'Ledger Sight',
    effect: 'Reveal next contract',
  },
  {
    id: 'scrap_sale',
    name: 'Scrap Buyer',
    effect: 'Sell unused ingredient for +1 coin',
  },
];
