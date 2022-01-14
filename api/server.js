const express = require('express')
const cors = require('cors')

const server = express()
const usersRouter = require('./users/users-router')

server.use(express.json())
server.use(cors())

server.use('/api', usersRouter);

server.get('/hello', (req, res)=>{
   res.json({ message: 'hello my friends -- this will probably end up beingn my backend for my portfolio webpage' })
})

server.get('*', (req, res)=>{
   res.send(`
      <h1> My App is Up! </h1>
   `)
})

server.use((err, req, res, next)=>{
   res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
   })
})

module.exports = server;
