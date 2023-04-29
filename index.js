const express=require('express')
const app=express()
const port=9000


// //set middleware to allow request from all origins
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//     next();
//   })

// const db=require('./config/mongoose')
const chatServer=require('http').Server(app)
const io=require('./config/websocket').createSocket(chatServer)


app.listen(port,()=>{
    console.log(`Express server running on port : ${port}`)
})

chatServer.listen(8000,()=>{
    console.log(`Chat server running on port :8000`)
})
