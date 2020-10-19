import { ScrumboardList } from './scrumboard-list.interface';

export interface Scrumboard {
  id: number;
  label: string;
  children: ScrumboardList[];
  starred?: boolean;
}
