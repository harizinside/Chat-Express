const io = require( "socket.io" )();
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );

    socket.emit('message', 'You have successfully joined the chat');

    socket.on('message', (msg) => {
      io.emit('message', msg)
    });
});
// end of socket.io logic

module.exports = socketapi;