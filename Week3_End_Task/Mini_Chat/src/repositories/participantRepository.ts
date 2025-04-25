import Participant from '../models/participants';
import { GenericRepository } from './GenericRepository';

export class ParticipantRepository extends GenericRepository<Participant> {
  constructor() {
    super(Participant);
  }
}
