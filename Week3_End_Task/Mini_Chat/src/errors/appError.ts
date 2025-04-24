class AppError extends Error {
    statusCode!:number;
    isOptional!:boolean;

    constructor(message:string,statusCode:number,isOptional:boolean){
        super(message);
        this.statusCode = statusCode;
        this.isOptional = isOptional;
        Error.captureStackTrace(this,this.constructor);
    }
}
export default AppError;