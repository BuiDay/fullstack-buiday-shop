import { Mode } from "fs";
import mongoose, { Model } from "mongoose";

var blogCategorySchema = new mongoose.Schema(
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

const blogCategory:Model<any> = mongoose.model("Blog Category",blogCategorySchema);

export = blogCategory