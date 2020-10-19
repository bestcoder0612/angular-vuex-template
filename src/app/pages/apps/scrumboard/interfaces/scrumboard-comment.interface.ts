import { ScrumboardUser } from './scrumboard-user.interface';
import { DateTime } from 'luxon';

export interface ScrumboardComment {
  from: ScrumboardUser;
  message: string;
  date: DateTime;
}
