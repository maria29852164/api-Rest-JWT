import {Router} from 'express'
import {AuthController} from '../controllers/auth.controller'
import {indexMiddleware} from "../middlewares";
const router=Router()
router.post('/sinup',[indexMiddleware.verifiedToken,indexMiddleware.isAdmin,indexMiddleware.checkDataUser,indexMiddleware.checkRoleExist],AuthController.singUp)
router.post('/sinin',AuthController.sinIn)

export default router
