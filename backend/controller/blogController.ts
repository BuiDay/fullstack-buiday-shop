import Blog from  "../models/blogModel";
import asyncHandler from 'express-async-handler';
import validateMongodbId from '../utils/validateMongodbId';
import {User} from "../models/userModel";
import { Response, Request } from 'express';
import { cloudinaryUploading } from "../utils/cloudinary";

interface IUserRequest extends Request {
    user?:any,
    files?:any
}
  

export const createBlog = asyncHandler( async (req:Request, res:Response):Promise<void>=>{
    try{
        const newBlog = await Blog.create(req.body);
        res.json({
            status:"success",
            code:1,
            newBlog,
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})

export const updateBlog = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params
    validateMongodbId(id)
    try{
        const updateBlog = await Blog.findByIdAndUpdate(id,req.body,{new:true})
        res.json({
            status:"success",
            updateBlog,
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})

export const getBlog = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params
    validateMongodbId(id)
    try{
        const getBlog = await Blog.findById(id)
            .populate("likes")
            .populate("dislikes")
        const updateBlog = await Blog.findByIdAndUpdate(
            id,
            {
                $inc:{numViews:1},
            },{
                new:true,
            }
        )
        res.json({
            status:"success",
            code:1,
            getBlog,
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})

export const getAllBlog = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const getAllBlog = await Blog.find()
        res.json({
            status:"success",
            code:1,
            data:getAllBlog,
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})

export const deleteBlog = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params
    validateMongodbId(id)
    try{
        const deleteBlog = await Blog.findByIdAndDelete(id)
        res.json({
            status:"success",
            code:1,
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})

export const likeBlog = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {blogId} = req.body
    validateMongodbId(blogId);
    const req2 = req as IUserRequest
    const blog = await Blog.findById(blogId);
    const loginUserId = req2?.user?.id;
    const isLiked = blog?.isLiked;
    const alreadyDisliked = blog?.dislikes?.find(
        (userId:string) => userId?.toString() === loginUserId?.toString()
    );
    if(alreadyDisliked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull:{dislikes:loginUserId},
                isDisliked:false,
            },{
                new:true
            }
        )
        res.json(blog)
    }
    if(isLiked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull:{likes:loginUserId},
                isLiked:false,
            },{
                new:true
            }
        )
        res.json(blog)
    }else{
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull:{likes:loginUserId},
                isLiked:true,
            },{
                new:true
            }
        )
        res.json(blog)
    }
})

export const dislikeBlog = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {blogId} = req.body
    validateMongodbId(blogId);
    const req2 = req as IUserRequest
    const blog = await Blog.findById(blogId);
    const loginUserId = req2?.user?.id;
    const isDisliked = blog?.isDisliked;
    const alreadyLiked = blog?.likes?.find(
        (userId:string) => userId?.toString() === loginUserId?.toString()
    );
    if(alreadyLiked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull:{likes:loginUserId},
                isLiked:false,
            },{
                new:true
            }
        )
        res.json(blog)
    }
    if(isDisliked){
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull:{dislikes:loginUserId},
                isDisliked:false,
            },{
                new:true
            }
        )
        res.json(blog)
    }else{
        const blog = await Blog.findByIdAndUpdate(
            blogId,
            {
                $pull:{dislikes:loginUserId},
                isDisliked:true,
            },{
                new:true
            }
        )
        res.json(blog)
    }
})

export const uploadImage = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const {id} = req.params;
    const req2 = req as IUserRequest
    validateMongodbId(id);
    try {
        const uploader = (path:string) => cloudinaryUploading(path,"images");
        const urls = [];
        const files = req2.files;
        for( const file of files){
            const {path} = file;
            const newpath = await uploader(path);
            urls.push(newpath)
        }
        const findBlog = await Blog.findByIdAndUpdate(
            id,
            {
                images:urls.map(file=>{
                    return file
                })
            },
            {
                new:true
            }
        )
        res.json(findBlog)
    } catch (error) {
        if(error)
        throw new Error(error.toString())
    }
})

