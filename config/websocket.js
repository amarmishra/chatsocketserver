const { application } = require("express")
const { Socket } = require("socket.io")


module.exports.createSocket=function(server){

    //a websocket service running at port 8000 at the server
        const io= require("socket.io")(server,{
            cors:{
                origin:'*'    //take care of cors policy --allow orgin of react app
            }
                
        })

        //fires when any client gets connected
        io.on("connection",(socket)=>{
            
            //sockets refers to the client socket

            console.log("Socket id",socket.id)
            //register events on socket
            socket.on('messageClientToServer',(data)=>handleMessageReceivedFromClient(socket,data))
            socket.on('typingMessage',()=>handleTypingEvent(socket))
            socket.on('close',()=>{
                console.log('Client is disconnected')
            })

        })


        //websocket  eventEmitters

        function handleTypingEvent(socket){
            socket.broadcast.emit("typingEvent","someone is typing")
            return
        }

        function handleMessageReceivedFromClient(socket,data){
            //store message in database
                        // "mainMessage":this.state.newMessage,
                        // "serverConfirmed":false,
                        // "receiver":this.props.receiver,
                        // "sent":true,
                        // "recieved":false,
                        // "seen":false,
                        // "id":Date.now()
            //broadcast message to other clients
            // console.log("Message recieved form",socket.id)
            // console.log(data)
            data.serverConfirmed=true
            data.sent=false;
            data.received=true

            socket.broadcast.emit("messageServerToClient",data);

        }

        return io
}
