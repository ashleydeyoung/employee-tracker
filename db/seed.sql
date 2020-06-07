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
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO departments (department_name)
VALUES ("HR");

INSERT INTO departments (department_name)
VALUES ("Legal");

INSERT INTO departments (department_name)
VALUES ("Sales");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Sue", "Morris", 2, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Steve", "Martin", 3, 7);

INSERT INTO roles (title, salary, department_id)
VALUES ("HR Director", 80000.00, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Lawyer", 120000.00, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Exec", 70000.00, 3);
