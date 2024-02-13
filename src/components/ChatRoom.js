// ChatRoom.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('error', (error) => {
  console.error('Socket connection error:', error);
});

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Listen for incoming chat messages
    socket.on('chatMessage', (message) => {
      console.log('Received chat message on client:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  
    return () => {
      // Clean up when the component unmounts
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    // Send a new chat message to the server
    socket.emit('chatMessage', newMessage);
    setNewMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
