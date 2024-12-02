import http from 'http';
import express from 'express';
import path from 'path';
import { Server } from 'socket.io';

const port = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const filePath = path.resolve(__dirname, '../src/public');
// key thing, i cant directly do app.listen() because i need to pass the server to socket.io thus i need http server

app.use(express.static(filePath));

app.get('/', (req, res) => {
    res.sendFile(path.join(filePath, 'index.html'));
});

io.on('connection', (client) => {
    console.log('a user connected', client.id);

    client.on('message', (message) => {
        console.log('message: ' + message);
        // koi frnotend se aya to sabko bhej dega
        io.emit('message', message);
    });

});

server.listen(port, () => { console.log(`Server is running on port ${port}`) });