import { ParticipantRepository } from './../repositories/participantRepository';
import { MessageRepository } from "../repositories/messageRepository";
import { RoomRepository } from "../repositories/roomRepository";
import { UserRepository } from "../repositories/userRepository";
import { ParticipantCreateParameters, ParticipantGetByParameter } from '../Dtos/participantDtos';
import Participant from '../models/participants';

export class ParticipantService{
    private readonly participantRepository : ParticipantRepository;
    private readonly userRepository : UserRepository;
    private readonly roomRepository : RoomRepository;
    constructor(){
        this.participantRepository = new MessageRepository();
        this.userRepository = new UserRepository();
        this.roomRepository = new RoomRepository();
    }

    public async addParticipantAsync(parameters:ParticipantCreateParameters):Promise<string|null>{
        const user = await this.userRepository.getByIdAsync(parameters.userId);
        if(user === null) return 'User not found';

        const room = await this.roomRepository.getByIdAsync(parameters.roomId);
        if(room === null) return 'Room not found';

        await this.participantRepository.addAsync(parameters);
        return null;
    }

    public async getAllParticipantsAsync():Promise<string|Participant[]>{
        const participants = await this.participantRepository.getAllAsync();
        if(participants.length === 0) return 'Not found participants';

        return await this.participantRepository.getAllAsync();
    }

    public async getParticipantByIdAsync(parameter:ParticipantGetByParameter):Promise<string|Participant>{
        if(!isNaN(parameter.id)) return 'Id must be the number';

        const participant = await this.participantRepository.getByIdAsync(parameter.id) ;
        if(participant === null) return 'Participant not found';
        return participant;
    }

    public async deleteParticipantAsync(parameter:ParticipantGetByParameter):Promise<string|null>{
        if(!isNaN(parameter.id)) return 'Id must be the number';

        const participant = await this.participantRepository.getByIdAsync(parameter.id) ;
        if(participant === null) return 'participant not found';

        await this.participantRepository.deleteAsync(participant);
        return null;
    }
}