const express = require('express');
const app = express();
let cors = require("cors");
app.use(cors());
// Define sample data for the API
const products = [
  {
    id: 'recZkNf2kwmdBcqd0',
    name: 'Organic Apples',
    price: 1.99,
    image: 'https://thumbs2.imgbox.com/12/bb/KfzfFcjB_t.jpg',
    color: [
        "#ff0000",
        "#00ff00",
        "#0000ff"
        ],
    company: 'Farm Fresh Organics',
    description: 'Fresh, juicy, and delicious apples grown organically on our farm.',
    category: 'Fruits',
    shipping: true,
  },
  {
    id: "recEHmzvupvT8ZONH",
    name: 'Organic Bananas',
    price: 0.99,
    image: 'https://thumbs2.imgbox.com/12/bb/KfzfFcjB_t.jpg',
    color: [
        "#ff0000",
        "#00ff00",
        "#0000ff"
        ],
    company: 'Green Earth Organics',
    description: 'Sweet and ripe bananas grown with care on our organic farm.',
    category: 'Fruits',
    shipping: true,
  },
  {
    id: "rec5NBwZ5zCD9nfF0",
    name: 'Organic Carrots',
    price: 2.49,
    image: 'https://thumbs2.imgbox.com/12/bb/KfzfFcjB_t.jpg',
    color: [
        "#ff0000",
        "#00ff00",
        "#0000ff"
        ],
    company: 'Harvest Organics',
    description: 'Fresh and crunchy carrots grown without the use of harmful pesticides.',
    category: 'Vegetables',
    shipping: true,
  },
  {
    id: "recd1jIVIEChmiwhe",
    name: 'Organic Spinach',
    price: 3.99,
    image: 'https://thumbs2.imgbox.com/12/bb/KfzfFcjB_t.jpg',
    color: [
        "#ff0000",
        "#00ff00",
        "#0000ff"
        ],
    company: 'Organic Farms Co.',
    description: 'Tender and flavorful spinach leaves grown naturally on our organic farm.',
    category: 'Leafy Greens',
    shipping: false,
  },
];

// Define routes for the API
app.get('/', (req, res) => {
  res.send('Welcome to the Organic Food Store API');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server started on port 4000');
});