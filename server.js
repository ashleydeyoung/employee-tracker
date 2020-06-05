const mysql = require("mysql");
const inquirer = require("inquirer");

// const connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "rootroot",
//   database: "playlistDB",
// });

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   startApp();
// });
startApp();
function startApp() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "mainMenu",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add department",
        "Add role",
        "Add employee",
        "Update employee role",
        "EXIT",
      ],
    })
    .then(function (answer) {
      if ("View all department") {
        viewAllDepartments();
      }
      if ("View all roles") {
        viewAllRoles();
      }
      if ("View all employees") {
        viewAllEmployees();
      }
      if ("Add department") {
        addDepartment();
      }
      if ("Add role") {
        addRole();
      }
      if ("Add employee") {
        addEmployee();
      }
      if ("Update employee role") {
        updateEmployeeRole();
      }
      if ("EXIT") {
        connection.end();
      }
    });
}

function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What department would you like to add?",
        name: "deptAdd"
    }).then(function(answer) {
        //code here to add department
    })
}

function addRole() {
    inquirer.prompt({
        type: "input",
        message: "What role would you like to add?",
        name: "roleAdd"
    },
    {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary"
    },
    {
        type: "input",
        message: "What is the name of the department for this role?",
        name: "departmentRole"
    },
    ).then(function(answer) {
        //code here to add role
    })
}
function addEmployee() {
    inquirer.prompt({
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName"
    },
    {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName"
    },
    {
        type: "input",
        message: "What is the employee's role?",
        name: "employeeRole"
    },
    {
        type: "input",
        message: "Who is the employee's manager?",
        name: "employeeManager"
    },
    )
    .then(function(answer) {
        //code here to add employee
    })
}