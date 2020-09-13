import jwt from 'jsonwebtoken'
import config from '../config'
export const verifiedToken=async (req,res,next)=>{
    const token=req.headers['x-access-token']
    if(!token)return res.status(401).json({message:"no token provided"})
    const verifiedToken=await jwt.verify(token,config.secret)
    req.roles=verifiedToken.roles
    next()

}
export const isAdmin=(req,res,next)=>{
    const admin=req.roles.filter(role=>role.name==='admin')
   if(admin[0]!=''){
       next()
   }else{
       res.json({message:"user not has privileges"})
   }
}
export const isModerator=(req,res,next)=>{
    const moderator=req.roles.filter(role=>role.name==='admin')
    if(moderator[0]!=''){
        next()
    }else{
        res.json({message:"user not has privileges"})
    }
}
export const isDefault=(req,res,next)=>{
    next()
}
