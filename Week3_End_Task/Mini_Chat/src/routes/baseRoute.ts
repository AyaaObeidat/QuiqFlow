import { MessageController } from './../controllers/messageController';
import {  Router } from "express";
import  UserController  from "../controllers/userController";
import { RoomController } from "../controllers/roomControllers";
import { ParticipantController } from '../controllers/participantControllers';

export class BaseRoute{
    public router: Router;
  
    constructor() {
        this.router = Router();
        this.initializeUserRoutes();
        this.initializeRoomRoutes();
        this.initializeMessageRoutes();
        this.initializeParticipantRoutes();
      }

      private initializeUserRoutes() {
       const userController = new UserController();
       this.router.post('/addUser',userController.addUserAsync);
       this.router.get('/getAllUsers',userController.getAllUsersAsync);
       this.router.post('/getUserById',userController.getUserByIdAsync);
       this.router.patch('/updateUser',userController.UpdateUserAsync);
       this.router.delete('/deleteUser',userController.deleteUserAsync);
      }

      private initializeRoomRoutes() {
        const roomController = new RoomController();
        this.router.post('/addRoom',roomController.addUserAsync);
        this.router.get('/getAllRooms',roomController.getAllRoomsAsync);
        this.router.post('/getRoomById',roomController.getRoomByIdAsync);
        this.router.patch('/updateRoom',roomController.updateRoomAsync);
        this.router.delete('/deleteRoom',roomController.deleteRoomAsync);
       }
       private initializeMessageRoutes() {
        const messageController = new MessageController();
        this.router.post('/addMessage',messageController.addMessageAsync);
        this.router.get('/getAllMessages',messageController.getAllMessagesAsync);
        this.router.post('/getMessageById',messageController.getMessageByIdAsync);
        this.router.patch('/updateMessage',messageController.updateMessageAsync);
        this.router.delete('/deleteMessage',messageController.deleteMessageAsync);
       }
       private initializeParticipantRoutes() {
        const participantController = new ParticipantController();
        this.router.post('/addParticipant',participantController.addParticipantAsync);
        this.router.get('/getAllParticipants',participantController.getAllParticipantsAsync);
        this.router.post('/getParticipantById',participantController.getParticipantByIdAsync);
        this.router.delete('/deleteParticipant',participantController.deleteParticipantAsync);
       }
}

