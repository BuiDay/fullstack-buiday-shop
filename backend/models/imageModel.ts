import mongoose,{Model,model,Schema} from 'mongoose'

var imageSchema = new mongoose.Schema(
    {
    images:[{
        type:String,
        required:true, 
        }]
    }
    ,{
        timestamps:true
    }  
)

const Image:Model<any> = mongoose.model("Image",imageSchema)

export = Image