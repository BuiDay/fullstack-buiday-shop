import Product from '../models/productModel'
import Image from '../models/imageModel'
import Category from '../models/categoryModel';
import Description from '../models/descriptionModel'
import { Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';


import apple_mobile from '../data/mobile/apple-mobile.json'
import oppo_mobile from '../data/mobile/oppo-mobile.json'
import xiaomi_mobile from '../data/mobile/xiaomi-mobile.json'
import asus_mobile from '../data/mobile/asus_mobile.json'
import nokia_mobile from '../data/mobile/nokia_mobile.json'
import realme_mobile from '../data/mobile/realme_mobile.json'
import samsung_mobile from '../data/mobile/samsung-mobile.json'
import vivo_mobile from '../data/mobile/vivo-mobile.json'


import apple_laptop from '../data/Laptop/apple_laptop.json'
import hp_laptop from '../data/Laptop/hp_laptop.json'


import Cate from '../data/categories.json'
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

;
const fn = async (product:any) =>{
    const newIdImage = new ObjectId()
    const newIdDes = new ObjectId()
    console.log(product?.price[0])
  
    await Product.create({
        title:product?.title[0] || "null",
        slug:slugify(product?.title[0] || "null"),
        price:product?.price[0] && product?.price[0].price_through!==null && product?.price[0].price_through.match(/\d/g).join('') || "null",
        discount:product?.price[0] && product?.price[0].price_show ? product?.price[0].price_show === "Giá Liên Hệ" ? "Giá Liên Hệ" :product?.price[0].price_show.match(/\d/g).join('') : product?.price[0].price_show || "null",
        category:product?.category[0] || "null",
        brand:product?.brand[0] || "null",
        color:product?.colors || "null",
        technicalInfo:product?.technicalInfo[0] || "null",
        totalRating:product?.totalRating[0] || "null",
        images:newIdImage || "null",
        description:newIdDes || "null",
        quantity:Math.random() * 100 || "null"
    })

    await Description.create({
        _id:newIdDes,
        features_description:product?.description[0].features_des && product?.description[0].features_des || "null",
        detail_description:product?.description[0].features_detail &&  product?.description[0].features_detail || "null"
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
    let promies = []
    
    const arrayMobile = [apple_mobile,oppo_mobile,xiaomi_mobile,asus_mobile,realme_mobile,samsung_mobile,vivo_mobile,nokia_mobile]
    // const arrayMobile = [asus_mobile,]
    
    for (let i of arrayMobile){
        for (let product of i) {
            await promies.push(fn(product))
         }
    }

    const arrayLaptop = [apple_laptop,hp_laptop]
    
    for (let i of arrayLaptop){
        for (let product of i) {
            await promies.push(fn(product))
         }
    }


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