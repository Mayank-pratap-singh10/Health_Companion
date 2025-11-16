import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import patientRoute from "./routes/patient.routes.js"
const app = express()


app.use(
  cors({
    origin: ["http://localhost:5173" ,"http://localhost:4173"] ,      
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// importing routes


// declaring routes
app.use("/api/v1/patient",patientRoute)




export {app}