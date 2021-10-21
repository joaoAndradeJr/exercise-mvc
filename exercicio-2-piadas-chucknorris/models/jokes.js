const axios = require('axios').default;

const getJokeWithCategory = async (category) => {
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const { data } = await axios.get(url);
  return data.value;
};

const getRandomJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const { data } = await axios.get(url);
  return data.value;
};

module.exports = {
  getJokeWithCategory,
  getRandomJoke,
}