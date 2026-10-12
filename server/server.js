const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/DBconnect")
 const PORT= process.env.PORT||2003
 const app=express()
 connectDB()
 app.use(cors())
 app.use(express.json())

 app.use("/api/tasks", require("./routs/TaskRouter"))
app.use("/api/article", require("./routs/articleRouter"))
app.use("/api/users", require("./routs/userRouter"))
app.use("/api/photo", require("./routs/photoRouter"))

app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})