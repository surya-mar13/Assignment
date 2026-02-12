import {Schema,model} from 'mongoose'
import strict from 'node:assert/strict'


const cartSchema=new Schema({
    Product:{
        type:Schema.Types.ObjectId,
        ref:"Product"
    }
})


const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
         type:cartSchema
         
    }

},
{
    strict:'throw',
    timestamps:true,
    versionKey:false

})

export const UserModel=model('userModel',userSchema)