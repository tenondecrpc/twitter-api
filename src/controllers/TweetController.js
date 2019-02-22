const Tweet = require('../models/Tweet');

async function findAll(req, res) {
    const tweets = await Tweet.find().sort('-createdAt');
    return res.json(tweets);
};

async function create(req, res) {
    const tweet = Tweet.create(req.body);
    return res.json(tweet);
};

module.exports = {
    findAll,
    create
};

