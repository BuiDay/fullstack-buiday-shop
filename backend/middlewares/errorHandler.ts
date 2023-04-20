import {Request,Response,NextFunction} from 'express'

//not found 
export const notFound = (req:Request, res:Response, next:NextFunction) =>{
    const error =  new Error(`Not Found :${req.originalUrl}`)
    res.status(404);
    next(error)
}

//error handler
export const errorHandler = (err: Error, req:Request, res:Response, next:NextFunction) =>{
    const statusCode = res.statusCode == 200 ? 500 :res.statusCode;
    res.status(statusCode);
    res.json({
        status:"error",
        code: "-1",
        message: err?.message,
        stack:err?.stack,
    })
}

