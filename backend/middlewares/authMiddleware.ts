import { Request,Response,NextFunction } from "express";

export interface IGetUserAuthInfoRequest extends Request {
    user: any // or any other type
  }

import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import {User} from '../models/userModel';

export const authMiddleware = asyncHandler(async (req:Request, res:Response, next:NextFunction) =>{
    let req2 = req as IGetUserAuthInfoRequest
    let token:string;
    if(req2?.headers?.authorization?.startsWith("Bearer")){
        token = req2.headers.authorization.split(" ")[1];
        console.log(token)
        try{
            if(token){
                const decoded:any = jwt.verify(token, process.env.JWT_KEY || "");
                const user = await User.findById(decoded?.id);
                req2.user = user;
                next();
            }
        }catch(error){
            throw new Error("Not Authorized token expired, Please Logon again");
        }
    }else{
        throw new Error("There is no token attached to header");
    }
}) 

export const isAdmin = asyncHandler(async (req:Request, res:Response, next:NextFunction)=>{
    let req2 = req as IGetUserAuthInfoRequest
    const {email} = req2.user;
    try{
        const getUser = await User.findOne({email})
        if(getUser.role === 'admin'){
            next();
        }else{
            throw new Error("You are not an Admin")
        }
    }catch(err){
        if(err)
        throw new Error(err.toString());
    }
}) 

