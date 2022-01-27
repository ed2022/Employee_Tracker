DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL, 
  departments_id INT,
  FOREIGN KEY (departments_id) REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INT,
  FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE SET NULL,
  managers_id INT,
  FOREIGN KEY (managers_id) REFERENCES employees(id) ON DELETE CASCADE
);

