const express = require('express');

const categoriesController = require('./controllers/categories');
const jokesController = require('./controllers/jokes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.get('/categories', categoriesController.getCategories);

app.get('/jokes/:category', jokesController.getJokeByCategory);

app.get('/jokes', jokesController.getJokeByCategory);

app.get('/', categoriesController.redirectToCategories);

app.listen(PORT, () => console.log(`API escutando na porta ${PORT}`));
