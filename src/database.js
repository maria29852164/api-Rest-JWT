import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/apiProducts",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(db=>console.log("db is connect succesfully"))
.catch(err=>console.error(err))
