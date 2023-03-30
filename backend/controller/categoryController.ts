import Category from "../models/categoryModel"
import asyncHandler from 'express-async-handler';
import validateMongodbId from '../utils/validateMongodbId';
import { Response, Request } from 'express';

export const createCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const newCategory = await Category.create(req.body);
        res.json({
            status:"success",
            code:1,
            newCategory,
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})

export const updateCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params;
    validateMongodbId(id);
    try{
        const update = await Category.findByIdAndUpdate(id,req.body,{new:true})
        res.json({
            status:"success",
            code:1,
            update,
        })
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
})

export const deleteCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params;
    validateMongodbId(id);
    try{
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json({
            status:"success",
            code:1,
        })
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
})

export const getaCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params;
    validateMongodbId(id);
    try{
        const getA = await Category.findById(id)
        if(getA){
            res.json({
                status:"success",
                code:1,
                data:getA,
            })
        }else{
            throw new Error("Not found");
        }
       
    }catch(err){
        if(err)
    throw new Error(err.toString())
    }
})


export const getAllCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const getAll = await Category.find()
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

