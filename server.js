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

let voteCounterTwo = 0;
let voteCounterOne = 0;

  const voteOne = () => {
    voteCounterOne ++
  };

  const voteTwo = () => {
    voteCounterTwo ++
  };

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
      if (vote==1) {
        voteOne();
      }
      else if (vote==2) {
        voteTwo();
      };
        io.emit("cast vote", {one: voteCounterOne, two: voteCounterTwo, username: username});
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