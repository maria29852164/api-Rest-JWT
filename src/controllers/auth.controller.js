import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import secret from '../config'
import Role from '../models/role.model'
export const UserController={
    verifiedRole:async (roles=[])=>{
        if(roles.length>0){
            const rolesFound=await Role.find({name:{$in :roles}})
            return rolesFound
        }
        return ['user']

    },
    generateToken:async (user)=>{
        const token=await jwt.sign({id:user._id},secret.secret,{expiresIn:86400})
        return token

    },
    singUp:async (req,res)=>{
        const {username,email,password,roles} = req.body
        const rolesVerified= await UserController.verifiedRole(roles.replace(/['"]+/g, ''))
        const user=new User({username,email,password:await User.encriptyPassword(password),
            roles:rolesVerified.map(role=>role._id)
        })
        const saveUser=await user.save()
        const token=await UserController.generateToken(saveUser)
        return res.status(201).json({token,username,user:saveUser})


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
