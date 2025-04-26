// // import { MessageController } from './../controllers/messageController';
import { Router } from 'express';
import UserController from '../controllers/userController';
import { RoomController } from '../controllers/roomControllers';
import { ParticipantController } from '../controllers/participantControllers';
import { MessageController } from '../controllers/messageController';

export class BaseRoute {
  public router: Router;
  userController: UserController;
  roomController: RoomController;
  messageController: MessageController;
  participantController: ParticipantController;
  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.roomController = new RoomController();
    this.messageController = new MessageController();
    this.participantController = new ParticipantController();
    this.initializeUserRoutes();
    this.initializeRoomRoutes();
    this.initializeMessageRoutes();
    this.initializeParticipantRoutes();
  }

  private initializeUserRoutes() {
    this.router.post('/addUser', this.userController.addUserAsync.bind(this.userController));
    this.router.get('/getAllUsers', this.userController.getAllUsersAsync.bind(this.userController));
    this.router.post(
      '/getUserById',
      this.userController.getUserByIdAsync.bind(this.userController)
    );
    this.router.patch('/updateUser', this.userController.UpdateUserAsync.bind(this.userController));
    this.router.delete(
      '/deleteUser',
      this.userController.deleteUserAsync.bind(this.userController)
    );
  }

  private initializeRoomRoutes() {
    this.router.post('/addRoom', this.roomController.addRoomAsync.bind(this.roomController));
    this.router.get('/getAllRooms', this.roomController.getAllRoomsAsync.bind(this.roomController));
    this.router.post(
      '/getRoomById',
      this.roomController.getRoomByIdAsync.bind(this.roomController)
    );
    this.router.patch('/updateRoom', this.roomController.updateRoomAsync.bind(this.roomController));
    this.router.delete(
      '/deleteRoom',
      this.roomController.deleteRoomAsync.bind(this.roomController)
    );
  }
  private initializeMessageRoutes() {
    this.router.post(
      '/addMessage',
      this.messageController.addMessageAsync.bind(this.messageController)
    );
    this.router.get(
      '/getAllMessages',
      this.messageController.getAllMessagesAsync.bind(this.messageController)
    );
    this.router.post(
      '/getMessageById',
      this.messageController.getMessageByIdAsync.bind(this.messageController)
    );
    this.router.patch(
      '/updateMessage',
      this.messageController.updateMessageAsync.bind(this.messageController)
    );
    this.router.delete(
      '/deleteMessage',
      this.messageController.deleteMessageAsync.bind(this.messageController)
    );
  }
  private initializeParticipantRoutes() {
    this.router.post(
      '/addParticipant',
      this.participantController.addParticipantAsync.bind(this.participantController)
    );
    this.router.get(
      '/getAllParticipants',
      this.participantController.getAllParticipantsAsync.bind(this.participantController)
    );
    this.router.post(
      '/getParticipantById',
      this.participantController.getParticipantByIdAsync.bind(this.participantController)
    );
    this.router.delete(
      '/deleteParticipant',
      this.participantController.deleteParticipantAsync.bind(this.participantController)
    );
  }
}
