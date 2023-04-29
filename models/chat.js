const mongoose  = require("mongoose");

const chatMessageSchema=new mongoose.Schema({
    message:{
        type:String,
        
    },
    sender:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    receiver:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})

const ChatMessage=mongoose.model('ChatMessage',chatMessageSchema)

module.exports={ChatMessage}