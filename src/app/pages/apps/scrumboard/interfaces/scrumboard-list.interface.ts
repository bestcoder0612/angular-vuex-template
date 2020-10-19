import { ScrumboardCard } from './scrumboard-card.interface';

export interface ScrumboardList {
  id: number;
  label: string;
  children: ScrumboardCard[];
}
