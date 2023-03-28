import mongoose,{Model} from 'mongoose';

var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    sold:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    images:[
        {
            public_id:String,
            url:String
        }
    ],
    color:{
        type:String,
        required:true,
    },
    tags:String,
    ratings:[
        {
            star:Number,
            comment:String,
            postedby:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ],
    totalRating:{
        type:String,
        default:0
    }
},{
    timestamps:true
})

const Product:Model<any> = mongoose.model("Product",productSchema)

export = Product