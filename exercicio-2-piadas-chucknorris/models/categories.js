const axios = require('axios').default;

const getCategories = async () => {
  const url = 'https://api.chucknorris.io/jokes/categories';
  const { data } = await axios.get(url);
  return data;
};

const getJoke = async (category) => {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const { data } = await axios.get(url);
  return data.value;
};

module.exports = {
  getCategories,
  getJoke,
};
