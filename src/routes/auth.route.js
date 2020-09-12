import {Router} from 'express'
import {UserController} from '../controllers/auth.controller'
const router=Router()
router.post('/singup',UserController.singUp)
router.post('/singin'UserController.sinIn)

export default router
