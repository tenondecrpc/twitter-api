const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socket = require('socket.io');
const cors = require('cors');

const routes = require('./routes');

const app = express();

const server = http.Server(app);
const io = socket(server);

// const url = 'mongodb://twitter-user:twitter-password@127.0.0.1:27017/twitter-db?retryWrites=true';
const url = 'mongodb+srv://twitter-user:twitter-password@clustertwitterapi-ttl3n.mongodb.net/twitter-db?retryWrites=true';

mongoose.connect(url, { useNewUrlParser: true });

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