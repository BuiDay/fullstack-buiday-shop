import mongoose,{Model,model,Schema} from 'mongoose'

var descriptionSchema = new mongoose.Schema(
    {

    features_description:{
        type:String,
        required:true, 
    },
    detail_description:{
        type:String,
        required:true, 
    },
    }
    ,{
        timestamps:true
    }  
)

const Description:Model<any> = mongoose.model("Description",descriptionSchema)

export = Description