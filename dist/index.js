"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// key thing, i cant directly do app.listen() because i need to pass the server to socket.io thus i need http server
const filePath = path_1.default.resolve(__dirname, '../src/public');
app.use(express_1.default.static(filePath));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(filePath, 'index.html'));
});
server.listen(port, () => { console.log(`Server is running on port ${port}`); });
