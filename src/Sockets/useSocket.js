import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

const useSocketHook = () => {
    const [response, setResponse] = useState([]);
    const [startTimer, setStartTimer] = useState(false);
    const [counter, setCounter] = useState(30);
    const [handleVote, sethandleVote] = useState(0);

    const socketRef = useRef();

    useEffect(() => {
        console.log(response);
    }, [response]);

    useEffect (()=>{
        if (counter <= 0) {
            setResponse([])
        }
      },[counter]);
    
    useEffect(() => {

        socketRef.current = socketIOClient('http://localhost:8080');

        socketRef.current.on('cast vote', data => {
            
                if (data.vOne > data.vTwo) {
                    sethandleVote(1)
                }
                else if (data.vTwo > data.vOne) {
                    sethandleVote(2)
                }
                else if (data.vThree > data.vFour) {
                    sethandleVote(3)
                }
                else if (data.vThree < data.vFour) {
                    sethandleVote(4)
                }

            setResponse(prevState => [...prevState, data]);
        });

        socketRef.current.on('timer', data => {
            setCounter(data.countdown);
        });

        return () => {
            socketRef.current.disconnect();
        }
    }, []);

    const sendCounter = (vote, username) => {
        socketRef.current.emit('cast vote', vote, username);
        setStartTimer(true);
    };


    return { response, startTimer, counter, sendCounter, handleVote }
};

export default useSocketHook;