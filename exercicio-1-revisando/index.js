const express = require('express');

const jokeController = require('./controllers/joke');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.get('/', jokeController.listJokes);

app.listen(PORT, () => console.log(`API escutando na porta ${PORT}`));
