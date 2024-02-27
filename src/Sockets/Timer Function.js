function Timer() {
    const [startCounter, setStartCounter] = useState(false);
    const [counter, setCounter] = useState(0);
  
    useEffect(()=>{
  
      if(startCounter=true && counter>0){
        setInterval(()=>setCounter(counter - 1),1000);
     };
    },counter)
    
    if(counter=0){
      setStartCounter(false)
      setHandleVote(true)
    };
  };

  export default Timer;