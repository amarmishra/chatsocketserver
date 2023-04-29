require('dotenv').config()
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION_STRING)

const db=mongoose.connection

db.once('open', function() {
  
    console.log("Successfully connected to the database");

});

db.on('error',(err)=>{
    console.log('Failed to connect with database')
})

module.exports={db}