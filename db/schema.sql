DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INTEGER,
    PRIMARY KEY (id), 
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    PRIMARY KEY(id),    
    FOREIGN KEY(manager_id) REFERENCES employees(id)
);
