const jokesModel = require('../models/jokes');

const getJokeByCategory = async (req, res) => {
  const { category } = req.params;
  const joke = category ? await jokesModel.getJokeWithCategory(category)
    : await jokesModel.getRandomJoke();
  res.status(200).render('jokes/index', { joke });
};

module.exports = {
  getJokeByCategory,
};
