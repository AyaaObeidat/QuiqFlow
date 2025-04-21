import { Router } from 'express';
import { UserController } from '@/Controllers/UserController';

export class UserRoute {
  public router: Router;
  private userController: UserController;

  constructor(userController: UserController) {
    this.userController = userController;
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/allUsers', this.userController.getAllUsers);
    this.router.get('/pendingUsers', this.userController.getPendingUsers);
    this.router.get('/approvedUsers', this.userController.getApprovedUsers);

    this.router.post('/id', this.userController.getUserById);
    this.router.post('/addUser', this.userController.addUser);
    this.router.post('/login', this.userController.login);
    this.router.post('/updateReqStatus', this.userController.updateUserRequestStatus);

    this.router.patch('/updateUser', this.userController.updateUser);
    this.router.delete('/deleteUser', this.userController.deleteUser);
  }
}
