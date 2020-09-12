import express from 'express'
import path from 'path'
import morgan from 'morgan'
import router from "./routes/products.route";

import './database'
const app =express()


const port = process.env['PORT'] || 6000
app.set('PORT',port)

app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(express.json())
app.use('/products',router)





export default app
