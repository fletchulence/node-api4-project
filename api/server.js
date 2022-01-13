const express = require('express')

const server = express()

server.use(express.json())

server.get('/hello', (req, res)=>{
   res.json({ message: 'hello my friends -- this will probably end up beingn my backend for my portfolio webpage' })
})

server.get('*', (req, res)=>{
   res.send(`
      <h1> My App is Up! </h1>
   `)
})

module.exports = server;
