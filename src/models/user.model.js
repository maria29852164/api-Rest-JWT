import {Schema,model} from 'mongoose'
import bcrypt from 'bcryptjs'
const UserSchema=new Schema({
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:[{
        ref:'Role',
        type:Schema.Types.ObjectID
    }]
},{
    timestamp:true,
    versionKey:false
})

UserSchema.statics.encriptyPassword=async (password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}
UserSchema.statics.comparePassword=async (password,recivedPassword)=>await bcrypt.compare(password,recivedPassword)
export default model('User',UserSchema)
