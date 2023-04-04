import mongoose,{Model,model,Schema} from 'mongoose'

var colorSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
        }
    },{
        timestamps:true
    }  
)

const Color:Model<any> = mongoose.model("Color",colorSchema)

export = Color

