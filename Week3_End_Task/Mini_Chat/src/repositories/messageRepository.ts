import Message from '../models/message';
import { GenericRepository } from './GenericRepository';

export class MessageRepository extends GenericRepository<Message> {
  constructor() {
    super(Message);
  }
}
