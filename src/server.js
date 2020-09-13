import express from 'express'
import path from 'path'
import morgan from 'morgan'
import router from "./routes/products.route";
import routerAuth from './routes/auth.route'
import './database'
import Role from './models/role.model'
import {createRolesDefault} from './libs/setup'
const app =express()

const existRoles=async ()=>{
    const roles=await Role.exists()

    if(roles)return
    createRolesDefault()

}
existRoles()


const port = process.env['PORT'] || 4000
app.set('PORT',port)
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use(morgan('dev'))

app.use('/products',router)
app.use('/auth',routerAuth)





export default app
