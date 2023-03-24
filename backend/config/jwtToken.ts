import jwt from 'jsonwebtoken'

const generateToken = (id:string) =>{
    return process.env.JWT_KEY && jwt.sign({id},process.env.JWT_KEY,{ expiresIn: '1d' })
}

export = generateToken