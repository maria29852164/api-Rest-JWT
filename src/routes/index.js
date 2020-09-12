import {Router} from 'express'

const router=Router()

router.get('/',(req,res,next)=>{
    return res.send('hellow')
})
export default router
