const axios = require('axios').default;

const url = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = async () => {
  const result = await axios.get(url);
  return result.data.joke;
};

module.exports = {
  getJokes,
};
