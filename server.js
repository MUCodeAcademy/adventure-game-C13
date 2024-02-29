const app = require('express')();
const cors = require('cors');
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentails: true,
    }
});

let counter = 10;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
      counter -= 1;
      io.emit('timer', { countdown: counter });
      console.log(counter);
      if (counter <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

io.on("connection", (socket) => {
    console.log("Player Connected");

    socket.on("cast vote", (vote, username) => {
        io.emit("cast vote", {vote: vote, username: username});
        console.log("casted vote: ", vote, username);
        if (!timerInterval) {
            startTimer();
        }
    });

    socket.on("disconnect", () =>{
    console.log("Player Rage Quit");
    });
});

server.listen(8080, () => console.log("Server listening on port 8080"));