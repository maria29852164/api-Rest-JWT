import jwt from 'jsonwebtoken'
import config from '../config'
export const verifiedToken=async (req,res,next)=>{
    const token=req.headers['x-access-token']
    if(!token)return res.status(401).json({message:"no token provided"})
    try{
        const verifiedToken=await jwt.verify(token,config.secret)

        req.roles=verifiedToken.roles
        console.log(verifiedToken)
        return next()
    }catch (e){
        return res.json(e)
    }


}
export const isAdmin=(req,res,next)=>{
    const admin=req.roles.includes('admin')
    if(admin){
       return next()
    }else{
        return res.json({message:"user not has privileges"})
    }
}
export const isModerator=(req,res,next)=>{
    const moderator=req.roles.includes('moderator')
    if(moderator){
       return next()
    }else{
        return res.json({message:"user not has privileges"})
    }
}
export const isDefault=(req,res,next)=>{
    const user=req.roles.includes('user')
    const admin =req.roles.includes('admin')
    const moderator=req.roles.includes('moderator')

    if(user|| admin|| moderator ){
       return next()
    }else{
        return res.json({message:"user not has privileges"})
    }
}
