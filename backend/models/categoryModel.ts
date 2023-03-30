import mongoose,{Model,model,Schema} from 'mongoose'

var categorySchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true, 
        unique:true,
        index:true,
    },
    icon:{
        type:String,
        required:true, 
    },

    },{
        timestamps:true
    }  
)

const Category:Model<any> = mongoose.model("Category",categorySchema)

export = Category