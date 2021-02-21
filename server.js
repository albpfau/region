const http = require('http')
const app = require('./app')
const server = http.createServer(app);
const socketServer = require('./socketServer')
const PORT = process.env.PORT || 3600;
socketServer(server)
server.listen(PORT, ()=>{
  console.log(`listening${PORT}`);
})
