import { app } from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./db/index.js"
dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 4000;

dbConnection()
.then(()=>{
    app.listen(process.env.PORT, () => {
      console.log(` Server is running on port ${process.env.PORT}`);
    });
    
})
.catch((error)=>{
    console.log("MongoDB Connection failed")
})