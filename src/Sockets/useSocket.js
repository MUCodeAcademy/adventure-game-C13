import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

const useSocketHook = () => {
    const [response, setResponse] = useState([]);
    const [startTimer, setStartTimer] = useState(false);
    const [counter, setCounter] = useState(10);
    const [handleVote, setHandleVote] = useState(false);

    const socketRef = useRef();

    useEffect(() => {
        console.log(response);
    }, [response]);
    
    useEffect(() => {

        socketRef.current = socketIOClient('http://localhost:8080');

        socketRef.current.on('cast vote', data => {
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
     const VoteHandler = () => {
        if ( = 0) {
            setHandleVote(true)
        };
        else if () {
        };
     };

    return { response, startTimer, counter, sendCounter }
};

export default useSocketHook;