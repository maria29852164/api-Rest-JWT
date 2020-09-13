import jwt from 'jsonwebtoken'
import config from '../config'
export const verifiedToken=(req,res,next)=>{
    const token=req.headers['x-access-token']
    if(!token)return res.status(401).json({message:"no token provided"})
    const verifiedToken=jwt.verify(token,config.secret)
    req.roles=verifiedToken.roles
    next()

}
export const isAdmin=(req,res,next)=>{
    req.roles.map(role=>{
        return (role.name==='admin')?next():res.json({message:"user not has privilegies"})
    })
}
export const isModerator=(req,res,next)=>{
    req.roles.map(role=>{
        return (role.name==='moderator')?next():res.json({message:"user not has privilegies"})
    })
}
export const isDefault=(req,res,next)=>{
    req.roles.map(role=>{
        return (role.name==='user')?next():res.json({message:"user not has privilegies"})
    })
}
