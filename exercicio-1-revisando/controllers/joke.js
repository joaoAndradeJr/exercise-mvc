const jokeModel = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJokes();
  res.status(200).render('jokeView', { joke });
};

module.exports = {
  listJokes,
};
