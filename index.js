require('dotenv').config()

const server = require('./api/server.js')

const PORT = process.env.PORT || 9090;

server.listen(PORT, ()=>{
   console.log(`listening on port: ${PORT}`)
})

// server.use(express.static(path.join(__dirname, 'api/client/build')))
