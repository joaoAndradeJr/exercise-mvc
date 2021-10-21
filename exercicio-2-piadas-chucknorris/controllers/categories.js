const categoriesModel = require('../models/categories');

const redirectToCategories = async (_req, res) => {
  res.redirect('/categories');
};

const getCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategories();
  res.status(200).render('categories/index', { categories });
};

// const getJokeByCategory = async (req, res) => {
//   const { category } = req.params;
//   const joke = await categoriesModel.getJoke(category);
//   res.status(200).render('', { joke });
// };

module.exports = {
  redirectToCategories,
  getCategories,
  // getJokeByCategory,
};
