import { Application, Router } from 'express';
import express from 'express';
import errorHandler from './middlewares/errorHadling';
import { BaseRoute } from './routes/baseRoute';
import UserController from './controllers/userController';
class Server {
  app: Application;
  port: number;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.initMiddleware();
    this.initRoutes();
    this.initErrorHandler();
  }
  initErrorHandler() {
    this.app.use(errorHandler);
  }
  initRoutes() {
    const baseRoute = new BaseRoute();
    this.app.use('/api/miniChat', baseRoute.router);
  }
  initMiddleware() {
    this.app.use(express.json());
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}
export default Server;
