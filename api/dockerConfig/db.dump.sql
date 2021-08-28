  CREATE TABLE products (
    id serial PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    precio FLOAT NOT NULL,
    img TEXT NOT NULL,
    stock INT,
    categoria VARCHAR(255),
    autor VARCHAR(255),
    pagWeb TEXT,
    qty INT
  ); 

  INSERT INTO products (name, description, precio, img, stock, categoria, autor, pagWeb, qty) VALUES
  ("Mostacilla Degrade", "Aros de plata 950 , Argolla y mostacillas en degradé. Plata 950. Libre de Níquel. Tamaño: 1.6 cm aprox", 42990, "https://cdn.shopify.com/s/files/1/0255/7421/1646/products/image_1df80f55-5272-43f1-8d00-3237f95a06a5_600x.jpg?v=1598311563", "Aros", 5, "delacons", "https://www.delacons.com/collections/aros/products/aros-mostacilla-degrade");