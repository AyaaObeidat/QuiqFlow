import { Application } from "express";
import  express from "express";
import errorHandler from "./middlewares/errorHadling";
class Server{
    app!:Application;
    port!:number;


    constructor(port:number){
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
        throw new Error("Method not implemented.");
    }
    initMiddleware() {
       this.app.use(express.json());
    }

    public start(){
        this.app.listen(this.port,()=>{
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }
}
export default Server;
