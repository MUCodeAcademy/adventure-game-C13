// Server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');  // Import cors middleware

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  transports: ['websocket'], // Explicitly set WebSocket transport
});

// Use cors middleware
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to the chat server!');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for chat messages
  socket.on('chatMessage', (message) => {
    console.log('Received chat message:', message);
    // Broadcast the message to all connected clients
    io.emit('chatMessage', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
