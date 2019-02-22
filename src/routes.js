const express = require('express');
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();

routes.get("/tweets", TweetController.findAll);
routes.post("/tweets", TweetController.create);

routes.post("/likes/:id", LikeController.create);

module.exports = routes;