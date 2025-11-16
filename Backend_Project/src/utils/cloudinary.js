import { v2 as cloudinary } from 'cloudinary'
import fs from " from"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary=async(localPath)=>{
    try {
        if(!localPath)return null
        const upload= await cloudinary.uploader.upload(localPath,{
            resource_type:'auto'
        })
    } catch (error) {
        fs.unlinkSync(localPath)
        return null
        
    }

}
export {uploadOnCloudinary}
