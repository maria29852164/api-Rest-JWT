import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import secret from '../config'

import Role from '../models/role.model'
export const UserController={
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
        const token=await jwt.sign({id:user._id},secret.secret,{expiresIn:86400})
        return token

    },
    singUp:async (req,res)=>{
        const {username,email,password,roles} = req.body

       const rolesVerified= await UserController.verifiedRole(roles)
        const user=new User({username,email,password:await User.encriptyPassword(password),
            roles:rolesVerified
        })
        const saveUser=await User.create(user)
        const token=await UserController.generateToken(saveUser)
        return res.status(201).json({token,user:saveUser})


    },

    sinIn:async (req,res)=>{
        const {username,password}=req.body


            const user=await User.findOne({username})
            if(user){
                //res.json(user)

                const userComparePassword=await User.comparePassword(password,user.password)
                return (userComparePassword)?res.status(200).json(user.roles):res.status(404).json(`password is incorrect`)

            }else{
                res.status(404).json(`user not found with username: ${username}`)
            }






    }
}
