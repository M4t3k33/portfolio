CREATE DATABASE opinie_db;
USE opinie_db;

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rating INT NOT NULL,
    comment TEXT NOT NULL
);
