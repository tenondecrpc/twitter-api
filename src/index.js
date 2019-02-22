const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://gdgcdeuser:gdgcdepassword@clustertwitterapi-ttl3n.mongodb.net/twitter-db?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});