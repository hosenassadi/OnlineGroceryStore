const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ha99873@',
  database: 'grocery_store'
});



db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected');
});

// Routes
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/transactions/add', (req, res) => {
  const { productId, productName } = req.body;

app.get('/cart', (req, res) => {
    const query = 'SELECT * FROM transactions';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  

db.query('INSERT INTO transactions (product_id, product_name) VALUES (?, ?)', [productId, productName], (err) => {
  if (err) {
    console.error("Error inserting data into transactions table:", err);
    res.status(500).send('Error adding product to transactions');
    return;
  }
  res.sendStatus(200);
});
});


app.post('/transactions/remove', (req, res) => {
  const { productId } = req.body;
  console.log('Product ID received for removal:', productId);
  const query = 'DELETE FROM transactions WHERE product_id = ? LIMIT 1';
  db.query(query, [productId], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(404).send('Product not found in transactions');
    }
    res.status(200).send('Product removed from transactions');
  });
  

});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});