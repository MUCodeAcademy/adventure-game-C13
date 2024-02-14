// ChatRoom.js
import React, { useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('');
  const [userCount, setUserCount] = useState(0);
  const [connected, setConnected] = useState(false);
  const inputRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    // Connect to the Socket.IO server when the user is connected
    if (connected) {
      socket.current = io('http://localhost:3001');

      // Handle incoming messages from the server
      socket.current.on('message', (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      // Handle updated user count from the server
      socket.current.on('userCount', (count) => {
        setUserCount(count);
      });

      // Clean up the Socket.IO connection when the component unmounts
      return () => {
        socket.current.disconnect();
      };
    }
  }, [connected]);

  const handleConnect = () => {
    // Allow the user to connect only if a username is provided
    if (username.trim() !== '') {
      setConnected(true);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '' && username.trim() !== '') {
      const newMessage = {
        username,
        text: inputMessage,
      };

      // Send the message to the server
      socket.current.emit('message', newMessage);

      setInputMessage('');
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h4>Chat Room</h4>
      {!connected && (
        <div>
          <p>Enter your username to join:</p>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleConnect}>Join</button>
        </div>
      )}
      {connected && (
        <div>
          <p>Number of Users: {userCount}</p>
          <div style={{ height: '200px', border: '1px solid #ccc', padding: '10px', overflowY: 'scroll' }}>
            {messages.map((message, index) => (
              <div key={index}>
                <strong>{message.username}:</strong> {message.text}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="Type your message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              ref={inputRef}
            />
            <br />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
