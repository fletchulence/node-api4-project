const express = require('express')
const cors = require('cors')

let users = [
   {username: 'davidfletcher', firstName: 'david', password: 'david1234' }, 
   {username: 'sarafletcher', firstName: 'sara', password: 'sara1234' }
]

const server = express()

server.use(express.json())
server.use(cors())

server.get('/hello', (req, res)=>{
   res.json({ message: 'hello my friends -- this will probably end up beingn my backend for my portfolio webpage' })
})

// [GET] gets all users
server.get('/api/users', (req, res, next)=>{
   res.json(users)
})

// [POST] posts a new registrant to the state
server.post('/api/register',  (req, res, next)=>{
   // console.log(users)
   const {firstName, password, username} = req.body
   try{
      users.push({ ...req.body, username, firstName, password }) 
      return res.status(201).json( users )
   } catch(err){
      next(err)
   }
})

//

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
