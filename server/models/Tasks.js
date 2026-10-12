const mongoose = require("mongoose")
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        require:true
    },
    complete:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
module.exports =  mongoose.model("Task",TaskSchema)