CREATE DATABASE grocery_store;


CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL(10, 2)
);

INSERT INTO products (name, price) VALUES
('Milk', 4.00),
('Bread', 8.00),
('Cheese', 10.00),
('Coca Cola', 12),
('Orange Juice', 12),
('rice', 9),
('Pasta', 7),
('Humos', 10),
('Tuna', 4),
('Eggs', 13);


CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  product_name VARCHAR(100),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

ALTER TABLE transactions
DROP COLUMN action;

ALTER TABLE transactions
ADD COLUMN product_name VARCHAR(255);

DROP TABLE transactions;

CREATE TABLE transactions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  product_name VARCHAR(255),  -- To store the product name
  FOREIGN KEY (product_id) REFERENCES products(id)
);
