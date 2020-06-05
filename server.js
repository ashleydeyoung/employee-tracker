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
startApp()
function startApp() {
  inquirer.prompt({
    type: "list",
    message: "What would you like to do?",
    name: "mainMenu",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add departments",
      "Add roles",
      "Add employees",
      "Update employee role",
      "EXIT"
    ],
  })
  .then (function(answer) {
      console.log(answer)
      // if answer then function answer
      //if exit connection.end()
  })
}
