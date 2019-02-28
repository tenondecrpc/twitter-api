const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const server = http.Server(app);
const io = socket(server);

mongoose.connect('mongodb+srv://gdgcdeuser:gdgcdepassword@clustertwitterapi-ttl3n.mongodb.net/twitter-db?retryWrites=true', {
    useNewUrlParser: true
});

app.use( (req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});