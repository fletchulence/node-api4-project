const express = require('express');
const path = require('path');
// const cors = require('cors');

const app = express();
const usersRouter = require('./api/users/users-router');

app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
// app.use(cors())

app.use('/api', usersRouter);

app.get('/', (req, res)=>{
   // `<h1> hello </h1>`
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.get('/hello', (req, res)=>{
   res.json({ message: 'hello my friends -- this will probably end up beingn my backend for my portfolio webpage' })
})

app.use((err, req, res, next)=>{
   res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack
   })
})

module.exports = app;
