DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE departments(
id INT AUTO_INCREMENT NOT NULL,
department VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE roles(
id INT AUTO_INCREMENT NOT NULL,
salary INT NOT NULL,
title VARCHAR(30) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE employees(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO departments (department)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1), ("Salesperson", 80000, 1), ("Lead Engineer", 150000, 2), ("Software Engineer", 120000, 2), ("Accountant", 125000, 3), ("Analyst", 90000, 3), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("John", "Doe", 1), ("Mike", "Chan", 2), ("Ashley", "Rodriguez", 3), ("Kevin", "Tupik", 4), ("Malia", "Brown", 5), ("Sarah", "Lourd", 6), ("Tom", "Allen", 7), ("Christian", "Eckenrode", 8);