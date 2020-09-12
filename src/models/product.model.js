import {Schema,model} from 'mongoose'

const ProductSchema=new Schema({
    name:String,
    description:String,
    category:String,
    price:Number,
    imgUrl:String
},{
    timestamp:true,
    versionKey:false
})
export default model('Product',ProductSchema)
