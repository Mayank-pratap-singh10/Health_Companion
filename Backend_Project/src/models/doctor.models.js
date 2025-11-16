
import mongoose from "mongoose"
const doctorSchema = new mongoose(
    {
    username:{
        type:String,
        required:true,
        lowercase:true,
    },
    
    
        
    
    patients:{
        type:mongoose.Schema.Types.ObjectId,// this is used to link to schema 
        ref:"User",

    },
    experienceInYears:{
        type:Number,
        required:true,
        default:0
    },
    hospital:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital"
    }]
    

},{timestamps:true})
export const Doctor=mongoose.model("Doctor",doctorSchema)