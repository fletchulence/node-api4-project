const express = require('express');

const server = express()

server.use(express.json())

const PORT = process.env.PORT || 9090;

server.listen(PORT, ()=>{
   console.log(`listening on port: ${PORT}`)
})