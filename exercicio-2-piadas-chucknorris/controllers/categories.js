const categoriesModel = require('../models/categories');

const redirectToCategories = async (_req, res) => {
  res.redirect('/categories');
};

const getCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategories();
  res.status(200).render('categories/index', { categories });
};

module.exports = {
  redirectToCategories,
  getCategories,
};
