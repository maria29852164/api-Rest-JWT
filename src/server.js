import express from 'express'
import path from 'path'
import router from "./routes";
const app =express()

app.use(express.urlencoded({extended:false}))
app.use(router)



export default app
