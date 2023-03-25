import jwt from 'jsonwebtoken';

export const generateRefreshToken = (id:string) =>{
    if(process.env.JWT_KEY)
    return jwt.sign({id},process.env.JWT_KEY,{ expiresIn: '3d' })
    else
    return -1
}
