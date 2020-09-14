import User from '../models/user.model'
import Roles from '../models/role.model'
import AuthController from './auth.controller'
import Role from "../models/role.model";
export const UserController={
    createUser:async (req,res)=> {
        const {username, email, password, roles} = req.body

        const rolesFound=await Role.find({name:{$in:roles}})
        const rolesId=rolesFound.map(role=>role._id)

        const user=await User.create({username,email,password,roles:rolesId})
            return res.status(201).json({message:"user created",user})
    },
    getAllUser:async (req,res)=>{
        try{
            const users=await User.find()
            return res.json({users})
        }catch (e) {
            return res.json(e)
        }
    }
}
