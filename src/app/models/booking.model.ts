import { User } from './LoginUser.model';
import { Box } from './box.model';

export interface Booking {
  id: string;
  box: Box;
  initialDate: Date;
  finalDate: Date;
  price: number;
  user: User;
}
