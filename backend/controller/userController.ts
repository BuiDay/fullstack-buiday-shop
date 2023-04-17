import { Response, Request } from 'express';
import {User} from '../models/userModel';
import bcrypt from 'bcrypt';
import asyncHandler from 'express-async-handler'
import { generateRefreshToken } from '../config/refreshToken';
import generateToken from '../config/jwtToken';
import { IUserModel } from './interface';
import validateMongodbId from '../utils/validateMongodbId';

interface IUserRequest extends Request {
    user: any
}
  

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
                data:"1",
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

// const handlerRefreshToken = asyncHandler( async(req, res)=>{
//     const cookie = req.cookies;
//     if(!cookie?.refreshToken) throw new Error("No refresh token in cookies");
//     const refreshToken = req.cookies.refreshToken;
//     const user = await User.findOne({refreshToken})
//     if(!user) throw new Error("No refresh token present in db or not matched");
//     jwt.verify(refreshToken, process.env.JWT_KEY,(err, decode)=>{
//        if(err || user.id !== decode.id){
//         throw new Error("There is something wrong whitd refresh token");
//        }
//        const token = generateToken(user.id);
//        res.json({token})
//     })
// })

export const logoutUser = asyncHandler(async (req:Request, res:Response):Promise<any>=>{
    const cookie:Record<string,any>= req.cookies;
    if(!cookie?.refreshToken){
        throw new Error("No refresh token in cookies");
    }
    const refreshToken= cookie.refreshToken;
    const user = await User.findOne({refreshToken});
    if(!user){
        res.clearCookie("refreshToken",{
            httpOnly:true,
            secure:true,
        });
        return res.sendStatus(204);
    }
    
    await User.findOneAndUpdate(refreshToken,{
        refreshToken:"",
    })
    res.clearCookie("refreshToken",{
        httpOnly:true,
        secure:true,
    })
    return res.sendStatus(204);
})

export const getAllUser = asyncHandler( async (req:Request, res:Response):Promise<void> => {
    try{ 
        const listUser:IUserModel[] = await User.find();
        res.json({
            status:"success",
            data:listUser
        })
    }catch(err){
        if(err)
        throw new Error(err.toString())
    }
})

export const getUserById = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const getId:string = req.params.id;
        validateMongodbId(getId);
        const getUser = await User.findById(getId)
        if(getUser){
            res.json(getUser);
        }
    }catch(err){
        throw new Error("Not found")
    }
})

export const deleteUser = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const getId:string = req.params.id;
        validateMongodbId(getId);
        const getUser = await User.findByIdAndDelete(getId);
        if(getUser){
            res.json({
                status:"success",
                code:"1",
            });
        }else{
            throw new Error("Error Delete")
        }
    }catch(err){
        throw new Error("Not found")
    }
})

export const updateUser = asyncHandler(async (req:Request, res:Response):Promise<void>=>{
    try{
        const req2 = req as IUserRequest
        const getId = req2.user.id;
        const getUser = await User.findByIdAndUpdate(getId,{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
    },{
        new:true,
    })
        res.json({
            status:"success",
            code:"1",
            data:getUser
        })
    }catch(err)
    {
        throw new Error("Error Update")
    }
})

