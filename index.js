const express=require('express')
const app=express()
const port=9000


const db=require('./config/mongoose')
const chatServer=require('http').createServer()
const io=require('./config/websocket').createSocket(chatServer)



app.listen(port,()=>{
    console.log(`Express server running on port : ${port}`)
})

chatServer.listen(8000,()=>{
    console.log(`Chat server running on port : 8000`)
})
