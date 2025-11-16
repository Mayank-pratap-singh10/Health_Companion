import mongoose from "mongoose"
const hospitalSchema=new mongoose({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pinCode:{
        type:String,
        required:true
    },
    specialization:[{
        type:String,
        default:"Regular"
    }]
},{timestamps:true})