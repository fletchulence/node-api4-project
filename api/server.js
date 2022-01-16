const express = require('express');
const path = require('path');
const cors = require('cors');

const server = express();
const usersRouter = require('./users/users-router');

server.use(express.json())
server.use(express.static(path.join(__dirname, 'client/build')))
server.use(cors())

server.use('/api', usersRouter);

server.get('/', (req, res)=>{
   // `<h1> hello </h1>`
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.get('/hello', (req, res)=>{
   res.json({ message: 'hello my friends -- this will probably end up beingn my backend for my portfolio webpage' })
})

server.use((err, req, res, next)=>{
   res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
   })
})

module.exports = server;
