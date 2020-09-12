import express from 'express'
import path from 'path'
import morgan from 'morgan'
import router from "./routes/products.route";
import routerAuth from './routes/auth.route'
import './database'
const app =express()


const port = process.env['PORT'] || 3000
app.set('PORT',port)

app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(express.json())
app.use('/products',router)
app.use('/auth',routerAuth)





export default app
