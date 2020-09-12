import {Router} from 'express'
import {ProductController} from '../controllers/product.controller'
const router=Router()
 router.get('/',ProductController.getProducts)
router.post('/create',ProductController.create)
router.get('product/:id',ProductController.getProduct)
router.put('/updateProduct/:id',ProductController.updateProduct)
router.delete('/deleteProduct/:id',ProductController.deleteProduct)

export default router
