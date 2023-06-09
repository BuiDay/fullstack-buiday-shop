import mongoose,{Model,model,Schema} from 'mongoose'

var cartSchema = new mongoose.Schema({
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            count:Number,
            color:String,
            price:Number,
        },
    ],
    productsTotal:Number,
    cartTotal:Number,
    totalAfterDiscount:Number,
    orderby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{
    
    timestamps:true
})

const Cart:Model<any> = mongoose.model("Cart",cartSchema)

export = Cart

