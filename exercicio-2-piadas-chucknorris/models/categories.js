const axios = require('axios').default;

const getCategories = async () => {
  const url = 'https://api.chucknorris.io/jokes/categories';
  const { data } = await axios.get(url);
  return data;
};

module.exports = {
  getCategories,
};
