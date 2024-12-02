import http from 'http';
import express from 'express';
import path from 'path';

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);

// key thing, i cant directly do app.listen() because i need to pass the server to socket.io thus i need http server

const filePath = path.resolve(__dirname, '../src/public');

app.use(express.static(filePath));

app.get('/', (req, res) => {
    res.sendFile(path.join(filePath, 'index.html'));
});
server.listen(port, () => { console.log(`Server is running on port ${port}`) });