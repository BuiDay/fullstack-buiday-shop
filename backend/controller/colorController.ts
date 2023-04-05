import Color from "../models/colorModel"
import asyncHandler from 'express-async-handler';
import validateMongodbId from '../utils/validateMongodbId';
import { Response, Request } from 'express';


export const getAllColors = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const getAll = await Color.find()
        res.json({
            status:"success",
            code:1,
            data:getAll,
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})
