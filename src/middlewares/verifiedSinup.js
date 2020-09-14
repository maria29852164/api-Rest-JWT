//more complexity in the project Role query
import User from '../models/user.model'
const ROLES=['admin','user','moderator']
export const checkRoleExist=(req,res,next)=>{
    const roles=req.body.roles
    req.username=req.body.username
    req.email=req.body.email
    roles.map(role=>{
        if(!ROLES.includes(role)){
            return res.json({message:"user has role invalid"})
        }
    })
    return next()
}
export const checkDataUser=async (req,res,next)=>{
    const email=await verifiedEmail(req.email)
    const username=await verifiedUsername(req.username)
    console.log(email,username)
    if(username){
       return res.json({message: 'username already exist'})

   }else if(email) {
        return res.json({message: 'email already exist'})
    }
   return next()
}
const verifiedEmail=async (email)=>{

        const user = await User.find(email)
       if(!user)return false
        return true
}
const verifiedUsername=async (username)=>{

        const user=await User.find(username)
        if(!user)return false
        return true
}


