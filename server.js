const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log("Player Connected")

    

    Socket.on("cast vote", (vote) => {
        io.emit("player has casted vote", vote);
    });

    socket.on("disconnect", () =>{
    console.log("Player Rage Quit");
    });
});

server.listen(8080, () => console.log("Server listening on port 8080"));