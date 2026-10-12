const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName: {
        type:String,
        required :true
    },
    email: {
        type:String,
        required :true
    },
    address: {
        type:String
    },
    phone:{
        type:String,
        required:true,
        maxLength: 10
    }

},{
    timestamps:true
})
module.exports = mongoose.model("Users",userSchema)