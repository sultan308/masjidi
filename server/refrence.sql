-- For help || \?

-- List databases || \l

-- create databases || 
CREATE DATABASE database_name;

-- Delete databases || 
DROP DATABASE database_name;

-- connect to databases || \c database_name

-- Creat a table || 
CREATE TABLE products(
    id INT,
    name VARCHAR(50),
    price INT,
    on_sale BOOLEAN

);

CREATE TABLE masjid(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    location TEXT NOT NULL

);
CREATE TABLE user_credintials(
    username varchar PRIMARY KEY,
    email VARCHAR(80) NOT NULL UNIQUE,
    hash VARCHAR(128) Not NULL,
    salt varchar(128) NOT NULL

);
-- Delete table ||
DROP TABLE products;

-- List tables in database || \d

-- List table details || \d table_name

-- Add column to a table || 
ALTER TABLE products 
    ADD COLUMN featured BOOLEAN;

ALTER TABLE products 
    ADD COLUMN description TEXT,
    ADD COLUMN qty INT;

-- Delete column to a table || 
ALTER TABLE products 
    DROP COLUMN description ,
    DROP COLUMN qty ,
    DROP COLUMN featured ;




--Users

CREATE TABLE user (
    id BIGSERIAL PRIMARY KEY,
    firstname varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL,
    email varchar(100) UNIQUE NOT NULL,
    

)

CREATE TABLE reviews (
    
   
    id BIGSERIAL PRIMARY KEY, 
    masjid_id BIGINT NOT NULL references masjid(id),
    firstname VARCHAR(50)  NOT NULL,
    lastname VARCHAR(50)  NOT NULL,
    review TEXT NOT NULL, 
    rating INT  NOT NULL CHECK(rating  >= 1 AND rating <= 5)        
    

);

INSERT INTO reviews (masjid_id,firstname,lastname,review, rating) VALUES (4,'ahmed','soltan','Very good',4);