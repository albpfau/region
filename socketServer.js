module.exports = function socketServer(httpServer){
  const io = require('socket.io')
  const socketServer = io(httpServer,{
    path: '/socket'
  });

  socketServer.on('connect', socket=>{
    console.log('connect');
    socket.on('msg', ({user,msg})=>{
      socket.broadcast.emit('msg', {user,msg})
    })
  })
};
