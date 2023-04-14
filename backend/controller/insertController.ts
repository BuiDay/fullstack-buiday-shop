import Product from '../models/productModel'
import Image from '../models/imageModel'
import Category from '../models/categoryModel';
import Technical from '../models/technicalInfoModel';
import Description from '../models/descriptionModel'
import { Response, Request } from 'express';
import asyncHandler from 'express-async-handler';
import slugify from 'slugify';


import apple_mobile from '../data/mobile/apple-mobile.json'
import oppo_mobile from '../data/mobile/oppo_mobile.json'
import xiaomi_mobile from '../data/mobile/xiaomi_mobile.json'
import asus_mobile from '../data/mobile/asus_mobile.json'
import nokia_mobile from '../data/mobile/nokia_mobile.json'
import realme_mobile from '../data/mobile/realme_mobile.json'
import samsung_mobile from '../data/mobile/samsung_mobile.json'
import vivo_mobile from '../data/mobile/vivo_mobile.json'


import apple_tablet from '../data/Tablet/apple_tablet.json'
import book_tablet from '../data/Tablet/book_tablet.json'
import xiaomi_tablet from '../data/Tablet/xiaomi_tablet.json'
import nokia_tablet from '../data/Tablet/nokia_tablet.json'
import samsung_tablet from '../data/Tablet/samsung_tablet.json'
import lenovo_tablet from '../data/Tablet/lenovo_tablet.json'
import oppo_table from '../data/Tablet/oppo_tablet.json'

import apple_laptop from '../data/Laptop/apple_laptop.json'
import hp_laptop from '../data/Laptop/hp_laptop.json'

import apple_watch from '../data/watch/apple_watch.json'
import samsung_watch from '../data/watch/samsung_watch.json'
import xiaomi_watch from '../data/watch/xiaomi_watch.json'

import Cate from '../data/categories.json'
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

;
const fn = async (product:any) =>{
    const newIdImage = new ObjectId()
    const newIdDes = new ObjectId()
    const newIdTechnical = new ObjectId()

    await Product.create({
        title:product?.title[0] || "null",
        slug:slugify(product?.title[0] || "null"),
        price:product?.price[0].price_through && Number(product?.price[0].price_through.match(/\d/g).join('')) || 0,
        discount:product?.price[0].price_show &&  Number(product?.price[0].price_show.match(/\d/g).join('')) || 0,
        category:product?.category[0] || "null",
        brand:product?.brand[0] || "null",
        color:product?.colors || "null",
        technicalInfo:newIdTechnical,
        ram:product?.Ram | product?.ram,
        storage:product?.Storage | product?.storage,
        display:product?.Display | product?.display,
        totalRating:Number(product?.totalRating[0].split('/')[0]),
        images:newIdImage || "null",
        description:newIdDes || "null",
        quantity:Math.floor(Math.random() * 100) || "0",
        ratings:product?.review || [],
        cpu:product?.cpu,
        gpu:product?.gpu,
        resolution:product?.resolution,
        material:product?.material,
    })

    await Technical.create({
        _id:newIdTechnical,
        technicalInfo:product?.technicalInfo[0] || "null",
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
    
    // const arrayMobile = [apple_mobile,oppo_mobile,xiaomi_mobile,asus_mobile,realme_mobile,samsung_mobile,vivo_mobile,nokia_mobile]
    const arrayMobile = [apple_mobile, oppo_mobile,xiaomi_mobile,asus_mobile,realme_mobile,samsung_mobile,vivo_mobile,nokia_mobile]
    
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


    const arrayTablet = [book_tablet,apple_tablet,xiaomi_tablet,nokia_tablet,samsung_tablet,lenovo_tablet,oppo_table]
    
    for (let i of arrayTablet){
        for (let product of i) {
            await promies.push(fn(product))
         }
    }

    const arrayWatch = [apple_watch,samsung_watch,xiaomi_watch]
    
    for (let i of arrayWatch){
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