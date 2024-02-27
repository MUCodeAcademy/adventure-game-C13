const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log("Player Connected")

    

    Socket.on("cast vote to 1", (voteOne) => {
        io.emit("player has casted vote", voteOne);
    });

    Socket.on("cast vote to 2", (voteTwo) => {
        io.emit("player has casted vote", voteTwo);
    });

    socket.on("disconnect", () =>{
    console.log("Player Rage Quit");
    });
});

server.listen(8080, () => console.log("Server listening on port 8080"));