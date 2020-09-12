import User from '../models/user.model'
export const UserController={
    singUp:async (req,res)=>{
        const {username,email,password,roles} =req.body
        const user=await User.create({username,email,password:User.encriptyPassword(password)})
        return res.json({
            code:200,
            status:"successfully",
            user
        })
    },
    sinIn:async (req,res)=>{
        const {username,password}=req.body
        const user=await User.findOne({username,password})
        if(!user){
            return 'use not found'
        }
        return user.roles
    }
}
