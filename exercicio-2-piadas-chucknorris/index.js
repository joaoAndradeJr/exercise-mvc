const express = require('express');

const categoriesController = require('./controllers/categories');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.get('/categories', categoriesController.getCategories);

app.get('/', categoriesController.redirectToCategories);

app.listen(PORT, () => console.log(`API escutando na porta ${PORT}`));
