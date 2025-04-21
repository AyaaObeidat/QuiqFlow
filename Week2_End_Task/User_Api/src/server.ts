import express, { Application } from 'express';
import errorHandler from '@/Middlewares/ErrorHandling';
import { UserRoute } from '@/Routes/UserRoute';
import { UserController } from '@/Controllers/UserController';
import { User, users } from '@/_Models/UserModel';

export class Server {
  private app: Application;
  private port: number;
  private usersList: User[];

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.usersList = users;
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
  }

  private initializeRoutes() {
    const userController = new UserController(this.usersList);
    const userRoute = new UserRoute(userController);
    this.app.use('/api/users', userRoute.router);
  }

  private initializeErrorHandling() {
    this.app.use(errorHandler);
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}
