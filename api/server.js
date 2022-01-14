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

// [POST] login --> finding something in the list of arrays to match?
server.post('/api/login', (req, res, next)=>{
   // check the user array
   try{
      users.forEach(element => {
         if (element.username === req.body.username ){
            res.json({ message: `welcome in ${element.firstName}`})
         } else {
            console.log(users)
            next()
         }
      });
   } catch(err){
      next(err)
   }
   
   console.log(users)
   
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
