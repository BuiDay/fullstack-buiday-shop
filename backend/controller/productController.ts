import Product from '../models/productModel'
import {User} from "../models/userModel"
import { Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import validateMongodbId from '../utils/validateMongodbId';
import slugify from 'slugify';

interface IUserRequest extends Request {
    user: any
}

export const createProduct = asyncHandler(async (req:Request, res:Response):Promise<void> =>{
   try{
    if(req.body.title){
        req.body.slug = slugify(req.body.title)
    }
    const newProduct = await Product.create(req.body);
    res.json({
        code:1,
        status:"success",
        data:newProduct,
    })
   }catch(err){
    if(err)
    throw new Error(err.toString())
   }
})

export const updateProduct = asyncHandler(async (req:Request, res:Response):Promise<void> =>{
    const {id} = req.params;
    try{
    validateMongodbId(id);
     if(req.body.title){
         req.body.slug = slugify(req.body.title);
     }
     const newProduct = await Product.findByIdAndUpdate(id,req.body,{new:true});
     res.json({
         code:1,
         status:"success",
         data:newProduct,
     })
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
 })

export const deleteProduct = asyncHandler(async (req:Request, res:Response):Promise<void> =>{
    const {id} = req.params;
    try{
    validateMongodbId(id);
        const newProduct = await Product.findByIdAndDelete(id);
        if(newProduct){
            res.json({
                code:1,
                status:"success",
            })
        }else{
            throw new Error("Not found");
        }
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
})

export const getProduct = asyncHandler(async (req:Request, res:Response):Promise<void> =>{
    const {id} = req.params;
    try{
        console.log(req.params)
        validateMongodbId(id);
        const product = await Product.findById(id)
        .populate("ratings.postedby")
        .populate("images")
        .populate("description");
        if(product){
            res.json({
                code:-1,
                status:"success",
                data:product
            })
        }
        else{
            throw new Error("Not found");
        }
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
})

export const getAllProducts = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        //filter
        const queryObj = {...req.query};
        const excludefields = ["page","sort","limit","fields"];
        const query2= excludefields.forEach((el)=> delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
            queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=>`$${match}`);
        let query = Product.find(JSON.parse(queryStr)).populate("images");;

        //sorting
        if(req.query.sort){
            // const sortBy = req.query.sort.split(",").json(" ");
            query = query.sort(req.query.sort.toString());
        }else{
            query =query.sort("-createdAt");
        }

        //limiting the field
        
        if(req.query.fields){
            // const fields = req.query.fields.toString().split(",").json(" ");
            const fields = req.query.fields.toString().split(",");
            query = query.select(fields);
        }else{
            query =query.select("-__v");
        }

        //pagination
        const page:any = req.query.page;
        const limit:any = req.query.limit;
        const skip = (page -1) * limit;
        query = query.skip(skip).limit(limit)
        if(req.query.page){
            const productCount = await Product.countDocuments();
            if(skip >= productCount)
                throw new Error("This page does not exists");        
        }
        const allProduct = await query;
        if(allProduct){
            res.json({
                code:1,
                status:"success",
                data:allProduct
            })
        }
    }catch(err){
        if(err)
            throw new Error(err.toString())
    }
})

export const addToWishlist = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const req2 = req as IUserRequest
    const {id} = req2.user;
    const {proId} = req.body; 
    try {
        const user1 =await User.findById(id);
        const alreadyAddList = user1.wishlist.find((id:string)=>id.toString() === proId);
        if(alreadyAddList){
            let user = await User.findByIdAndUpdate(
                id,
                {
                    $pull:{wishlist:proId},
                },
                {
                    new:true,
                }
            )
            res.json({
                status:"success",
                code:1,
                data:user,
            })
        }else{
            let user = await User.findByIdAndUpdate(
                id,
                {
                    $push:{wishlist:proId},
                },
                {
                    new:true,
                }
            )
            res.json({
                status:"success",
                code:1,
                data:user,
            })
        }
    } catch (error) {
        if(error)
            throw new Error(error.toString())
    }
})

export const rating = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    const req2 = req as IUserRequest
    const {id} = req2.user;
    const {star, proId, comment} = req.body; 
    const setRating = async () => {
        const getProduct = await Product.findById(proId);
        let totalRating = getProduct.ratings.length;
        let ratingsum = getProduct.ratings
            .map((item:any)=>item.star)
            .reduce((prev:number, curr:number)=>prev + curr, 0);
        let actualRating = Math.round(ratingsum / totalRating);
        let finalProduct = await Product.findByIdAndUpdate(
            proId,
            {
                totalRating:actualRating,
            },
            {
                new:true,
            }
        )
        return finalProduct;
    };

    try {
        const product = await Product.findById(proId);
        let alreadyRated = product.ratings.find(
            (userId:any) => userId.postedby.toString() === id.toString()
        );
        if(alreadyRated){
            const updateProduct = await Product.updateOne(
                {
                    ratings:{$elemMatch:alreadyRated},
                },
                {
                    $set:{"ratings.$.star":star,"ratings.$.comment":comment},
                },
                {
                    new:true,
                }
            )
            let ratingProduct = await setRating();
            console.log(rating)
            res.json({
                status:"success",
                code:1,
                data:updateProduct,ratingProduct
            })
        }else{
            const rateProduct = await Product.findByIdAndUpdate(
                proId,
                {
                    $push:{
                        ratings:{
                            star:star,
                            comment:comment,
                            postedby:id
                        },
                    }
                },
                {
                    new:true
                }
            )
            let rating = await setRating();
            res.json({
                status:"success",
                code:1,
                data:rating
            })
        }
    } catch (error) {
        if(error)
            throw new Error(error.toString())
    }
})

