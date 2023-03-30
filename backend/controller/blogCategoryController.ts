import BlogCategory from "../models/blogCategoryModel"
import asyncHandler from 'express-async-handler';
import validateMongodbId from '../utils/validateMongodbId';
import { Response, Request } from 'express';

export const createBlogCategory = asyncHandler( async (req:Request, res:Response):Promise<void>=>{
    try{
        const newBlogCategory = await BlogCategory.create(req.body);
        res.json({
            status:"success",
            code:1,
            newBlogCategory,
        })
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
})

export const updateBlogCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params;
    validateMongodbId(id);
    try{
        const update = await BlogCategory.findByIdAndUpdate(id,req.body,{new:true})
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

export const deleteBlogCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params;
    validateMongodbId(id);
    try{
        const deleteBlogCategory = await BlogCategory.findByIdAndDelete(id);
        res.json({
            status:"success",
            code:1,
        })
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
})

export const getaBlogCategory = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params;
    validateMongodbId(id);
    try{
        const getA = await BlogCategory.findById(id)
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


export const getAllBlogCategory= asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const getAll = await BlogCategory.find()
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

