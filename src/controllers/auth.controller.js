import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import secret from '../config'

import Role from '../models/role.model'
export const AuthController={
    verifiedRole:async (roles)=>{
        if(roles){
            const rolesFound=await Role.find({name:{$in:roles}})
            return rolesFound.map(role=>role._id)
        }
        else{
            const roleUnique=await Role.findOne({name:"user"})
            return [roleUnique._id]
        }

    },
    generateToken:async (user)=>{
        const rolesUser=user.roles.map(role=>role.name)
        const token=await jwt.sign({id:user._id,roles:rolesUser},secret.secret,{expiresIn:86400})
        return token
    },
    singUp:async (req,res)=>{
        const {username,email,password,roles} = req.body

        const rolesVerified= await AuthController.verifiedRole(roles)
        const user=new User({username,email,password:await User.encriptyPassword(password),
            roles:rolesVerified
        })
        const saveUser=await User.create(user)
        return res.status(201).json({user:saveUser})


    },

    sinIn:async (req,res)=>{
        const {username,password}=req.body


            const user=await User.findOne({username}).populate('roles')
            if(user){

                const userComparePassword=await User.comparePassword(password,user.password)
                const token=await AuthController.generateToken(user)

               const rolesUser=user.roles.map(role=>role.name)
                return (userComparePassword)?res.status(200).json({token,roles:rolesUser}):res.status(404).json(`password is incorrect`)

            }else{
                res.status(404).json(`user not found with username: ${username}`)
            }






    }
}
