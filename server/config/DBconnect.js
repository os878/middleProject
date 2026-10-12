const mongoose = require("mongoose")
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
            console.log("connect succesful");
            
    }
    catch(err){
        console.log("fail to cinnect");
        
        console.log(err)
    }
}
module.exports = connectDB