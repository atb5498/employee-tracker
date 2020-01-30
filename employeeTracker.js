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
