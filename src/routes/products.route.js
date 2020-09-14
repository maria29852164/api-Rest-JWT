import {Router} from 'express'
import {ProductController} from '../controllers/product.controller'
import {indexMiddleware} from '../middlewares/index'
const router=Router()

router.get('/',[indexMiddleware.verifiedToken,indexMiddleware.isDefault],ProductController.getProducts)
router.post('/create',[indexMiddleware.verifiedToken,indexMiddleware.isAdmin],ProductController.create)
router.get('/product/:productId',[indexMiddleware.verifiedToken,indexMiddleware.isDefault],ProductController.getProduct)
router.put('/updateProduct/:productId',[indexMiddleware.verifiedToken,indexMiddleware.isAdmin,indexMiddleware.isModerator],ProductController.updateProduct)
router.delete('/deleteProduct/:productId',[indexMiddleware.verifiedToken,indexMiddleware.isAdmin],ProductController.deleteProduct)

export default router
