import { ParticipantRepository } from './../repositories/participantRepository';
import { RoomRepository } from '../repositories/roomRepository';
import { UserRepository } from '../repositories/userRepository';
import { ParticipantCreateParameters, ParticipantGetByParameter } from '../Dtos/participantDtos';
import Participant from '../models/participants';

export class ParticipantService {
  private readonly participantRepository: ParticipantRepository;
  private readonly userRepository: UserRepository;
  private readonly roomRepository: RoomRepository;

  constructor() {
    this.participantRepository = new ParticipantRepository(); 
    this.userRepository = new UserRepository();
    this.roomRepository = new RoomRepository();
  }

  public async addParticipantAsync(
    parameters: ParticipantCreateParameters
  ): Promise<string | null> {
    try {
      const user = await this.userRepository.getByIdAsync(parameters.userId);
      if (user === null) return 'User not found';

      const room = await this.roomRepository.getByIdAsync(parameters.roomId);
      if (room === null) return 'Room not found';

      await this.participantRepository.addAsync(parameters);
      return null;
    } catch (error) {
      console.error(error);
      return 'An error occurred while adding the participant';
    }
  }

  public async getAllParticipantsAsync(): Promise<string | Participant[]> {
    try {
      const participants = await this.participantRepository.getAllAsync();
      if (participants.length === 0) return 'No participants found';

      return participants;
    } catch (error) {
      console.error(error);
      return 'An error occurred while fetching participants';
    }
  }

  public async getParticipantByIdAsync(
    parameter: ParticipantGetByParameter
  ): Promise<string | Participant> {
    try {

      const participant = await this.participantRepository.getByIdAsync(parameter.id);
      if (participant === null) return 'Participant not found';
      return participant;
    } catch (error) {
      console.error(error);
      return 'An error occurred while fetching the participant';
    }
  }

  public async deleteParticipantAsync(
    parameter: ParticipantGetByParameter
  ): Promise<string | null> {
    try {
      
      const participant = await this.participantRepository.getByIdAsync(parameter.id);
      if (participant === null) return 'Participant not found';

      await this.participantRepository.deleteAsync(participant);
      return null;
    } catch (error) {
      console.error(error);
      return 'An error occurred while deleting the participant';
    }
  }
}
