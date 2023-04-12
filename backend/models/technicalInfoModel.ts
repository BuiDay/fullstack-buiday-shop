import mongoose,{Model,model,Schema} from 'mongoose'

var technicalSchema = new mongoose.Schema(
    {
    technicalInfo:[{
        type:String,
        required:true, 
        }]
    }
    ,{
        timestamps:true
    }  
)

const Technical:Model<any> = mongoose.model("Technical",technicalSchema)

export = Technical