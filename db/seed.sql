USE employee_db;

INSERT INTO departments (department_name)
VALUES ("HR"),("Legal"),("Sales");

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, 1), ("Sue", "Morris", 2, 4), ("Steve", "Martin", 3, 7);

INSERT INTO roles (title, salary, department_id)
VALUES ("HR Director", 80000.00, 1),("Lawyer", 120000.00, 2), ("Marketing Exec", 70000.00, 3);

