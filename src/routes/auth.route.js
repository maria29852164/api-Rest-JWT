import {Router} from 'express'
import {UserController} from '../controllers/auth.controller'
const router=Router()
router.post('/sinup',UserController.singUp)
router.post('/sinin',UserController.sinIn)

export default router
