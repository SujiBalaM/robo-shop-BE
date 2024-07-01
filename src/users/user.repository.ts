import { Repository } from 'typeorm';
import { User } from './user.entity';

export class userRepository extends Repository<User> {}
