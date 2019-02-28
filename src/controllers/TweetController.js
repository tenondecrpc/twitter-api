const Tweet = require('../models/Tweet');

async function find(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt');

    return res.json(tweets);
};

async function create(req, res) {
    const tweet = await Tweet.create(req.body);
    
    req.io.emit('tweet', tweet);

    return res.json(tweet);
};

module.exports = {
    find,
    create
};

