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

let voteCounterOne = 0;
let voteCounterTwo = 0;
let voteCounterThree = 0;
let voteCounterFour = 0;
let voteCounterFive = 0;

  const voteOne = () => {
    voteCounterOne ++
  };
  const voteThree = () => {
    voteCounterOne ++
  };
  const voteFive = () => {
    voteCounterOne ++
  };

  const voteTwo = () => {
    voteCounterTwo ++
  };
  const votefour = () => {
    voteCounterTwo ++
  };

let counter = 10;
let timerInterval;
let timerGoing = false;

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
      timerGoing = true;
      if (vote==1) {
        voteOne();
      }
      else if (vote==3) {
        voteThree();
      }
      else if (vote==5) {
        voteFive();
      }
      else if (vote==2 ) {
        voteTwo();
      }
      else if (vote==4 ) {
        votefour();
      } 
      else if (vote==0) {
        voteCounterOne=0;
        voteCounterTwo=0;
        voteCounterThree=0;
        voteCounterFour=0;
        voteCounterFive=0;
        counter=10;
        timerGoing = false;
      }
        io.emit("calculate vote", {vOne: voteCounterOne, vThree: voteCounterThree, vFive: voteCounterFive,  vTwo: voteCounterTwo, vFour: voteCounterFour, username: username});
        console.log("casted vote: ", vote, username);
        io.emit("cast vote", {})
        if (timerGoing) {
            startTimer();
        }
    });

    socket.on("disconnect", () =>{
    console.log("Player Rage Quit");
    });
});

server.listen(8080, () => console.log("Server listening on port 8080"));