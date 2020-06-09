const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  startApp();
});
// startApp();
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
      switch (answer.mainMenu) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "Update employee role":
          updateEmployeeRole();
          break;
        case "EXIT":
          connection.end();
          break;
        default:
          break;
      }
    });
}

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What department would you like to add?",
      name: "deptAdd",
    })
    .then(function (answer) {
      //code to add department
      connection.query("INSERT INTO departments SET ?", {
        department_name: answer.deptAdd,
      });
      //code here to view department
      connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        console.log(res.length + " departments found!");
        console.table(res);
        startApp();
      });
    });
}

function addRole() {
  let choicesArr = [];
  connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;
    for (let i = 0; i < res.length; i++) {
      choicesArr.push(res[i].department_name);
    }

    inquirer
      .prompt([
        {
          type: "input",
          message: "What role would you like to add?",
          name: "roleAdd",
        },
        {
          type: "input",
          message: "What is the salary for this role?",
          name: "salaryAdd",
        },
        {
          type: "list",
          message: "What is the name of the department for this role?",
          name: "departmentRole",
          //get choices from department table from dept name array
          choices: choicesArr,
        },
      ])
      .then(function (data) {
        //code here to add role
        let newId = "";
        for (let j = 0; j < res.length; j++) {
          if (res[j].department_name == data.departmentRole) {
            newId = res[j].id;
          }
        }
        connection.query(
          "INSERT INTO roles SET ?",
          {
            title: data.roleAdd,
            salary: data.salaryAdd,
            department_id: newId,
          },
          function (err, res) {
            if (err) throw err;
            console.log("New role has been saved!");
            startApp();
          }
        );
      });
  });
}


function addEmployee() {
  let roleArr = [];
    connection.query("SELECT * FROM roles", function (err, res) {
      if (err) throw err;
      for (let i = 0; i < res.length; i++) {
        roleArr.push(res[i].title);
      }

      inquirer
        .prompt([
          {
            type: "input",
            message: "What is the employee's first name?",
            name: "firstName",
          },
          {
            type: "input",
            message: "What is the employee's last name?",
            name: "lastName",
          },
          {
            type: "list",
            message: "What is the employee's role?",
            name: "employeeRole",
            choices: roleArr,
          },
          {
            type: "input",
            message: "What is the employee's manager id?",
            name: "employeeManager"
          },
        ])
        .then(function (answer) {
          console.log("it worked")
          let newRoleId;
          for (let j = 0; j < res.length; j++) {
            if (res[j].title == answer.employeeRole) {
              newRoleId = res[j].id;
              console.log(newRoleId);
            }
          }
          //code here to add employee
          connection.query(
            "INSERT INTO employees SET ?",
            {
              first_name: answer.firstName,
              last_name: answer.lastName,
              role_id: newRoleId,
              manager_id: answer.employeeManager,
            },
            function (err) {
              if (err) throw err;
              console.log("Your employee has been added!");
              startApp();
            }
          );
        });
    });
}

function viewAllDepartments() {
  // code to view department

  connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;
    console.log(res.length + " departments found!");
    console.table(res);
    startApp();
  });
}

function viewAllRoles() {
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.log(res.length + " roles found!");
    console.table(res);
    startApp();
  });
  // code to view all roles
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    console.log(res.length + " employees found!");
    console.table(res);
    startApp();
  });
  // code to view all employees
}

function updateEmployeeRole() {
  inquirer
    .prompt(
      {
        type: "list",
        message: "Which employee would you like to update?",
        name: "updateRole",
        choices: [
          /*pull from roles table*/
        ],
      },
      {
        type: "input",
        message: "What is the salary for this new role?",
        name: "newSalary",
      },
      {
        type: "list",
        message: "Which department is this new role in?",
        name: "updateDept",
        choices: [
          //pulls from dept table
        ],
      }
    )
    .then(function (answer) {
      console.log("");
    });
}
