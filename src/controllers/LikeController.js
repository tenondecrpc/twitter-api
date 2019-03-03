const Tweet = require('../models/Tweet');

async function create(req, res) {
    const tweet = await Tweet.findById(req.params.id);

    if (tweet) {
        tweet.set({ likes: tweet.likes + 1 });

        await tweet.save();

        req.io.emit('like', tweet);
    }

    return res.json(tweet);
};

module.exports = {
    create
};