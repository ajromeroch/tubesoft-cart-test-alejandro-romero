  CREATE TABLE products 
  (
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
