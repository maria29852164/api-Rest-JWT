import {Router} from 'express'
import {ProductController} from '../controllers/product.controller'
import * as jwtVerified from '../middlewares/authToken'
const router=Router()
 router.get('/',ProductController.getProducts)
router.post('/create',[jwtVerified.verifiedToken,jwtVerified.isAdmin],ProductController.create)
router.get('/product/:productId',ProductController.getProduct)
router.put('/updateProduct/:productId',ProductController.updateProduct)
router.delete('/deleteProduct/:productId',ProductController.deleteProduct)

export default router
