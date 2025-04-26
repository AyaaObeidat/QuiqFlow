import {
  MessageCreateParameters,
  MessageGetByParameter,
  MessageUpdateParameters,
} from '../Dtos/messageDtos';
import Message from '../models/message';
import { MessageRepository } from '../repositories/messageRepository';
import { RoomRepository } from '../repositories/roomRepository';
import { UserRepository } from '../repositories/userRepository';

export class MessageService {
  private readonly messageRepository: MessageRepository;
  private readonly userRepository: UserRepository;
  private readonly roomRepository: RoomRepository;

  constructor() {
    this.messageRepository = new MessageRepository();
    this.userRepository = new UserRepository();
    this.roomRepository = new RoomRepository();
  }

  public async addMessageAsync(parameters: MessageCreateParameters): Promise<string | null> {
    try {
      const user = await this.userRepository.getByIdAsync(parameters.userId);
      if (user === null) return 'User not found';

      const room = await this.roomRepository.getByIdAsync(parameters.roomId);
      if (room === null) return 'Room not found';

      await this.messageRepository.addAsync(parameters);
      return null;
    } catch (error) {
      console.error('Error in MessageService.addMessageAsync:', error);
      throw error;
    }
  }

  public async getAllMessagesAsync(): Promise<string | Message[]> {
    try {
      const messages = await this.messageRepository.getAllAsync();
      if (messages.length === 0) return 'Not found messages';

      return messages;
    } catch (error) {
      console.error('Error in MessageService.getAllMessagesAsync:', error);
      throw error;
    }
  }

  public async getMessageByIdAsync(parameter: MessageGetByParameter): Promise<string | Message> {
    try {
      if (!isNaN(parameter.id)) return 'Id must be the number';

      const message = await this.messageRepository.getByIdAsync(parameter.id);
      if (message === null) return 'Message not found';

      return message;
    } catch (error) {
      console.error('Error in MessageService.getMessageByIdAsync:', error);
      throw error;
    }
  }

  public async deleteMessageAsync(parameter: MessageGetByParameter): Promise<string | null> {
    try {
      const message = await this.messageRepository.getByIdAsync(parameter.id);
      if (message === null) return 'Message not found';

      await this.messageRepository.deleteAsync(message);
      return null;
    } catch (error) {
      console.error('Error in MessageService.deleteMessageAsync:', error);
      throw error;
    }
  }

  public async UpdateMessageAsync(parameters: MessageUpdateParameters): Promise<string | null> {
    try {
      const message = await this.messageRepository.getByIdAsync(parameters.id);
      if (message === null) return 'Message not found';

      message.content = parameters.content || message.content;
      await this.messageRepository.updateAsync(message);
      return null;
    } catch (error) {
      console.error('Error in MessageService.UpdateMessageAsync:', error);
      throw error;
    }
  }
}
