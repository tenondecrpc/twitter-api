const Tweet = require('../models/Tweet');

async function create(req, res) {
    const tweet = await Tweet.findById(req.params.id);

    tweet.set({ likes: likes + 1 });

    await tweet.save();

    return res.json(tweet);
};

module.exports = {
    create
};