const express = require('express')
const cors = require('cors')

const users = process.env

const server = express()

server.use(express.json())
server.use(cors())

server.get('/hello', (req, res)=>{
   res.json({ message: 'hello my friends -- this will probably end up beingn my backend for my portfolio webpage' })
})

server.get('/api/users', (req, res, next)=>{
   res.json([
      {username: 'davidfletcher', firstName: 'david', password: 'david1234' }, 
      {username: 'sarafletcher', firstName: 'sara', password: 'sara1234' }
   ])
})


server.get('/api/register', (req, res, next)=>{
   console.log(users)
})

server.get('*', (req, res)=>{
   res.send(`
      <h1> My App is Up! </h1>
   `)
})

module.exports = server;
