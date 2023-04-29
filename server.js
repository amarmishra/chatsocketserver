//a websocket service running at port 8000 at the server
const io= require("socket.io")(8000,{
    cors:{
        origin:['http://localhost:3000']    //take care of cors policy --allow orgin
    }
           
})

io.on("connection",(socket)=>{
    console.log("Socket id",socket.id)




    const clientMessageHandler=async (data)=>{
        
        const message=data
        message.serverConfirmed=true

        //feedback to sender
        await socket.emit("serverSendFeedback",{value:true,key:data.id})

        //broadcast to other users
        socket.broadcast.emit("serverSendMessage",message)
    }
    socket.on("clientSendMessage",clientMessageHandler)
})

