import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const patientSchema = new mongoose.Schema(
    {
    username:{
        type:String,
        required:true,
        lowercase:true,
        index:true
    },
    age:{
        type:Number,
        required:true

    },
    gender:{   //avatar if we want
        type:String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    diagnosedWith:{
        type:String
        
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"hospital"
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true


    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
    

},{timestamps:true})

patientSchema.pre("save",function(next){
    if(!this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()

})
patientSchema.methods.isPasswordCorrect= async function(password){
    return await bcrypt.compare(password,this.password)

}
export const Patient=mongoose.model("Patient",patientSchema)