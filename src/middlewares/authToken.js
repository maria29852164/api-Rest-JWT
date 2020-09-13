import jwt from 'jsonwebtoken'
import config from '../config'
export const verifiedToken=(req,res,next)=>{
    const token=req.headers['x-access-token']
    if(!token)return res.status(401).json({message:"no token provided"})
    const verifiedToken=jwt.verify(token,config.secret)
    console.log(verifiedToken.roles)
    console.log(verifiedToken.id)
    next()

}
