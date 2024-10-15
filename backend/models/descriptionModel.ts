import mongoose,{Model,model,Schema} from 'mongoose'

var descriptionSchema = new mongoose.Schema(
    {

    features_description:{
        type:String,
    },
    detail_description:{
        type:String,
    },
    }
    ,{
        timestamps:true
    }  
)

const Description:Model<any> = mongoose.model("Description",descriptionSchema)

export = Description