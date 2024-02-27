import { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";

const useSocketHook = () => {
    const [response, setResponse] = useState([]);

    const socketRef = useRef();


    useEffect(() => {

        socketRef.current = socketIOClient('http://localhost:8080');

        socketRef.current.on('cast vote', data => {
            setResponse(prevState => [...prevState, data]);
        });

        return () => {
            socketRef.current.disconnect();
        }
    }, []);

    const sendCounter2 = (voteTwo) => {
        socketRef.current.emit('cast vote', voteTwo)
    }

    const sendCounter1 = (voteOne) => {
        socketRef.current.emit('cast vote', voteOne)
    }

    return { response, tallyVote }
};

export default useSocketHook;