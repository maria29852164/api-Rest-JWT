import {Router} from 'express'
import {indexMiddleware} from '../middlewares/index'
import {UserController} from '../controllers/user.controller'
const router=Router()
router.get('/',[indexMiddleware.verifiedToken,indexMiddleware.isDefault],UserController.getAllUser)

export default router
