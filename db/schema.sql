DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE employeeTracker (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL
);

CREATE TABLE reviews (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES employeeTracker(id)
    ON DELETE SET NULL
);
