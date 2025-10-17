// routes/products.js
const express = require('express');
const router = express.Router();

// In-memory product storage
let products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Smartphone', price: 20000 },
];

// GET /products → Send all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products → Add a new product
router.post('/', (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required.' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
