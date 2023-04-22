import mongoose,{Model,model,Schema} from 'mongoose'

var userSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    },
    cartId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart",
    },
    isBlock:{
        type:Boolean,
        default:false,
    },
    address:
        {
            type:String,
        }
    ,
    wishlist:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        }
    ],
    refreshToken:{
        type:String,
    },
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date,
},
{
    timestamps:true
}
)

export const User:Model<any> = model("User",userSchema)