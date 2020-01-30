DROP DATABASE IF EXISTS employee_tacker_db;

CREATE DATABASE employee_tacker_db;

USE employee_tacker_db;

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE role(
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary INT NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE employee(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), ("Salesperson", 80000, 2), ("Lead Engineer", 150000, 3), ("Software Engineer", 120000, 4), ("Accountant", 125000, 5), ("Assistant Accountant
", 90000, 6), ("Legal Team Lead", 250000, 7), ("Lawyer", 190000, 8);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 1), ("Mike", "Chan", 2), ("Ashley", "Rodriguez", 3), ("Kevin", "Tupik", 4), ("Malia", "Brown", 5), ("Sarah", "Lourd", 6), ("Tom", "Allen", 7), ("Christian", "Eckenrode", 8);
