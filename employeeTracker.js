const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "employee_tracker_db",
    password: process.env.DB_Password
});

connection.connect(function (error) {
    if (error) throw error;
    promptUser();
});

function promptUser() {
    inquirer.prompt([
        {
            type: "list",
            name: "menu",
            message: "What would you like to do?",
            choices: ["View All Employees", "View Employees By Department", "Add Employee", "Remove Employee", "Update Employee Role", "EXIT"]
        }
    ]).then(function (response) {
        if (response.menu === "View All Employees") {
            viewAllEmployees();
        } else if (response.menu === "View Employees By Department") {
            inquirer.prompt([
                {
                    type: "list",
                    name: "department",
                    message: "Choose a department.",
                    choices: ["Sales", "Engineering", "Finance", "Legal"]
                }
            ]).then(function (response) {
                if (response.department === "Sales") {
                    viewSalesEmployees();
                } else if (response.department === "Engineering") {
                    viewEngineeringEmployees();
                } else if (response.department === "Finance") {
                    viewFinanceEmployees();
                } else {
                    viewLegalEmployees();
                }
            })
        } else if (response.menu === "Add Employee") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "firstName",
                    message: "What is the employee's first name?",
                },
                {
                    type: "input",
                    name: "lastName",
                    message: "What is the employee's last name?",
                },
                {
                    type: "list",
                    name: "role",
                    message: "What is the employee's role?",
                    choices: ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Accountant", "Analyst", "Legal Team Lead", "Lawyer"]
                }
            ]).then(function (response) {
                addlEmployee(response);
            })
        }
    });
}

function viewAllEmployees() {
    connection.query("SELECT employees.id, employees.first_name, employees.last_name, roles.salary, roles.title, departments.department FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id;", function (error, response) {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

function viewSalesEmployees() {
    connection.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.salary, roles.title, departments.department FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id WHERE departments.department = "Sales";`, function (error, response) {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

function viewEngineeringEmployees() {
    connection.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.salary, roles.title, departments.department FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id WHERE departments.department = "Engineering";`, function (error, response) {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

function viewFinanceEmployees() {
    connection.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.salary, roles.title, departments.department FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id WHERE departments.department = "Finance";`, function (error, response) {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

function viewLegalEmployees() {
    connection.query(`SELECT employees.id, employees.first_name, employees.last_name, roles.salary, roles.title, departments.department FROM employees INNER JOIN roles ON employees.role_id = roles.id INNER JOIN departments ON roles.department_id = departments.id WHERE departments.department = "Legal";`, function (error, response) {
        if (error) throw error;
        console.table(response);
        promptUser();
    });
}

function addlEmployee(response) {
    connection.query(`SELECT id FROM roles WHERE title = "${response.role}"`, function (error, r) {
        connection.query(`INSERT INTO employees (first_name, last_name, role_id) VALUES ("${response.firstName}", "${response.lastName}", ${r[0].id})`, function (error, response) {
            if (error) throw error;
            viewAllEmployees();
        });
    });
}
