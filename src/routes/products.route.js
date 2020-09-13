import {Router} from 'express'
import {ProductController} from '../controllers/product.controller'
import * as jwtVerified from '../middlewares/authToken'
const router=Router()
router.get('/',ProductController.getProducts)
router.post('/create',[jwtVerified.verifiedToken,jwtVerified.isAdmin],ProductController.create)
router.get('/product/:productId',[jwtVerified.verifiedToken,jwtVerified.isDefault],ProductController.getProduct)
router.put('/updateProduct/:productId',[jwtVerified.verifiedToken,jwtVerified.isAdmin,jwtVerified.isModerator],ProductController.updateProduct)
router.delete('/deleteProduct/:productId',[jwtVerified.verifiedToken,jwtVerified.isAdmin],ProductController.deleteProduct)

export default router
