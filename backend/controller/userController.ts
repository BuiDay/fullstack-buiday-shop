import { Response, Request } from 'express';
import {User} from '../models/userModel';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler'
import { generateRefreshToken } from '../config/refreshToken';
import generateToken from '../config/jwtToken';
import { IUserModel } from './interface';

export const createUser = asyncHandler(async (req:Request, res:Response):Promise<void> =>{
    const getEmail = req.body.email;
    console.log(getEmail)
    try {
        const findUser:IUserModel[] = await User.find({email: getEmail});
            //hash password
        const salt:string = await bcrypt.genSalt(10);
        const newPassword:string = await bcrypt.hash(req.body.password, salt);

        const {lastName, firstName, email, password, mobile} = req.body;
        if(findUser.length <= 0){
            const newUser = User.create({
                lastName,
                firstName,
                email,
                password:newPassword,
                mobile
            })
            res.status(200).json({
                err:"1",
                status:"success"             
            });
        }else{
            throw new Error("User already exists");
        }
    } catch (error) {
        if(error)
        throw new Error(error.toString())
    }
    // if(!findUser){
    //     const newUser = User.create(req.body);
    //     res.json(newUser)
    // }else{
    //     throw new Error("User already exists")
    // };
}) 

export const loginUser = asyncHandler(async(req:Request, res:Response):Promise<void>=>{
    const {email, password} = req.body;
    try{
        const findUser = await User.findOne({email});
        if(!findUser){
            res.status(401).json({
                err:-1,
                status:"Not found user"
            })
        }
        //match password 
        const isPassword = await bcrypt.compareSync(password, findUser.password)
        if(!isPassword){
            res.status(401).json({
                err:-1,
                status:"Password was wrong"
            })
        }
        if(findUser && isPassword){
            const refreshToken = await generateRefreshToken(findUser.id);
            const updateUser = await User.findByIdAndUpdate(findUser.id,{
                refreshToken
            },{
                new:true,
            })
            res.cookie("refreshToken",refreshToken,{
                httpOnly:true,
                maxAge:72*60*60*1000,
            });
            res.json({
                status:"success",
                data:{
                    _id:findUser._id,
                    firstName: findUser.firstName,
                    lastName: findUser.lastName,
                    email: findUser.email,
                    mobile: findUser.mobile,
                    token:generateToken(findUser.id),
                }
            })
        }else{
          throw new Error("Invalid Credentials")
        }
    }catch(err){
        throw new Error("Invalid Credentials")
    }
  
    // if(findUser && await findUser.isPasswordMatched(password)){
    //     res.json(findUser)
    // }else{
    //     throw new Error("Invalid Credentials");
    // }
})

// export const loginAdmin = asyncHandler(async(req, res)=>{
//     const {email, password} = req.body;

//         const findAdmin = await User.findOne({email});
//         //match password 
//         const isPassword = await bcrypt.compareSync(password, findAdmin.password)
//         console.log(findAdmin.role)
//         if(findAdmin.role !== "admin"){
//             throw new Error("Not Authorised");
//         } 
//         else{
//         if(findAdmin && isPassword){
//             const refreshToken = await generateRefreshToken(findAdmin.id);
//             const updateAdmin = await User.findByIdAndUpdate(findAdmin.id,{
//                 refreshToken
//             },{
//                 new:true,
//             })
//             res.cookie("refreshToken",refreshToken,{
//                 httpOnly:true,
//                 maxAge:72*60*60*1000,
//             });
//             res.json({
//                 status:"success",
//                 data:{
//                     _id:findAdmin._id,
//                     firstName: findAdmin.firstName,
//                     lastName: findAdmin.lastName,
//                     email: findAdmin.email,
//                     mobile: findAdmin.mobile,
//                     token:generateToken(findAdmin.id),
//                 }
//             })
//         }else{
//           throw new Error("Invalid Credentials")
//         }
//        }
  
//     // if(findUser && await findUser.isPasswordMatched(password)){
//     //     res.json(findUser)
//     // }else{
//     //     throw new Error("Invalid Credentials");
//     // }
// })
