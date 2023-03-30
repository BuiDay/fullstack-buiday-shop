import Product from '../models/productModel'
import Image from '../models/imageModel'
import Category from '../models/categoryModel';
import Description from '../models/descriptionModel'
import { Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';
import Pro from '../data/apple-mobile.json'
import Cate from '../data/categories.json'
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

;
const fn = async (product:any) =>{
    const newIdImage = new ObjectId()
    const newIdDes = new ObjectId()
    await Product.create({
        title:product?.title[0],
        slug:slugify(product?.title[0]),
        price:product?.price[0].price_through.match(/\d/g).join(''),
        discount:product?.price[0].price_show.match(/\d/g).join(''),
        category:product?.category[0],
        brand:product?.brand[0],
        color:product?.colors,
        technicalInfo:product?.technicalInfo[0],
        totalRating:product?.totalRating[0],
        images:newIdImage,
        description:newIdDes,
        quantity:Math.random() * 100
    })

    await Description.create({
        _id:newIdDes,
        features_description:product?.description[0].features_des,
        detail_description:product?.description[0].features_detail
    })

    await Image.create({
        _id:newIdImage,
        images:product?.images
    })
}

const fn_2 = async (category:any) =>{
     await Category.create({
        title:category?.title,
        icon:category?.icon
     })
}

export const insertProduct= asyncHandler(async (req:Request, res:Response):Promise<any> =>{
    const promies = []
    for (let product of Pro) 
         promies.push(fn(product))
    await Promise.all(promies)
    return res.json("Done")

})

export const insertCategories= asyncHandler(async (req:Request, res:Response):Promise<any> =>{
    const promies = []
    for (let category of Cate) 
         promies.push(fn_2(category))
    await Promise.all(promies)
    return res.json("Done")

})