import Product from '../models/product.model'
export const ProductController={
    create:async (req,res)=>{
        const productCreate={
            name:req.body.name,
            description:req.body.description,
            price:parseFloat(req.body.price),
            category:req.body.category,
            imgUrl:req.body.imgUrl
        }
       const product=await Product.create(productCreate)
        return res.json({
            status:'successfully',
            code:200,
            product
        })
    },
    getProducts:async (req,res)=>{
       const products=await Product.find()
        return res.json(products)


    },
    getProduct:async (req,res)=>{
        const {productId}=req.params
        const product=await Product.findById(productId)
        return res.json(product)

    },
    deleteProduct:async (req,res)=>{
        const {productId}=req.params
     const product=   await Product.findById(productId)
        if(!product)return res.json('product not found with id: '+productId)
       await Product.deleteOne(product)


        return res.json('product deleted')



    },
    updateProduct:async (req,res)=>{
        const {productId}=req.params
        const {name,category,price,description}=req.body

        const updateProduct={name,category,price,description}
        const findProduct=await Product.findById(productId)
        if(findProduct){
            const product=await Product.updateOne(findProduct,updateProduct)
            return res.json(product)


        }

        return res.json('not found')


    },

}
