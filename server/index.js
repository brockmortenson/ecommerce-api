const express = require('express');
const products = require('../products.json');
const getProducts = require('../server/getProducts');

const app = express();

app.get('/api/products/', getProducts);
app.get('/api/products/:id', getProducts);

app.listen(3030, () => console.log('Server running on 3030...')) 