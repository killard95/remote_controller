const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// element pour le serveur io
const { Server } = require('socket.io');
const io = new Server(server);


const PORT = 3000;

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/robot", (request, response) => {
    response.render('robot')
});

io.on('connection', (socket) => {
    socket.on('up', () => {
        io.emit('up');
    })
});
io.on('connection', (socket) => {
    socket.on('down', () => {
        io.emit('down');
    })
});
io.on('connection', (socket) => {
    socket.on('left', () => {
        io.emit('left');
    })
});
io.on('connection', (socket) => {
    socket.on('right', () => {
        io.emit('right');
    })
});





server.listen(PORT, () => {
    console.log( `started on ${PORT}`)
})