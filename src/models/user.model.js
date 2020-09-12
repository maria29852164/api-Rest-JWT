import {Schema,model} from 'mongoose'

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
    role:[{
        ref:'Role',
        type:Schema.Types.ObjectID
    }]
},{
    timestamp:true,
    versionKey:false
})
export default model('User',UserSchema)
