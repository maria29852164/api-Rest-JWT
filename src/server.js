import express from 'express'
import path from 'path'
import router from "./routes/products.route";
const app =express()

app.use(express.urlencoded({extended:false}))
app.use('/products',router)



export default app
