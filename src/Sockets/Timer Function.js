import { useState, useEffect } from "react";

function Timer() {
    const [startCounter, setStartCounter] = useState(false);
    const [counter, setCounter] = useState(0);
  
    useEffect(()=>{
      console.log(counter);
      if(startCounter == true && counter > 0){
          setInterval(()=>setCounter(counter - 1),1000);
      };
    },[counter]);
    
    if (counter == 0){
      setStartCounter(false)
      // setHandleVote(true)
      console.log();
    };
  };

  export default Timer;