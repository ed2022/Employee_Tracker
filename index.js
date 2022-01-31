//REQUIRE INSTALLS- from Node Library
const inquirer = require('inquirer'); //Inquire prompt 
const db = require('./db');
require('console.table');

console.log(' ________________________________________________');
console.log('|                                                |');
console.log('|          EMPLOYEE  MANAGER  DATABASE           |');
console.log('|________________________________________________|\n');

//Main Questions 
const mainQuestion = [{
  type: 'list',
  name: 'pick',
  message: 'What would you like to do? ',
  choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Quit']}
]
const addDepQ = [{
  type: 'input',
  name: 'addDepName',
  message: 'What is the name of the department? ',}
]
const addRoleQ = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of the role? ',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the role? ',
  },
  {
    type: 'list',
    name: 'dep',
    message: 'Which department does the role belong too?',
    choices: []
  }
]
const addEmpQ = [
  {
    type: 'input',
    name: 'firstName',
    message: 'What is the first name of the employee? ',
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'What is the last name of the employee? ',
  },
  {
    type: 'list',
    name: 'empRole',
    message: 'Which role does the employee belong too?',
    choices: []
  },
  {
    type: 'list',
    name: 'manager',
    message: 'Who is the employee\'s manager',
    choices: []
  }

]
const updateQ = [
  {
    type: 'list',
    name: 'employee',
    message: 'Which employee\'s role do you want to update?',
    choices: []
  },
  {
    type: 'list',
    name: 'updatedRole',
    message: 'Which role do you want to assign the selected employee?',
    choices: []
  }
]
function menu(mainQuestion) {
  inquirer
    .prompt(mainQuestion)
    .then((data) => {
      switch (data.pick) {
        case 'Add Department':
          inquirer
            .prompt(addDepQ)
            .then((data) => {
              var newDep = data.addDepName.trim(); 
              db.addDepartment(newDep)
              .then(data => {
                console.log("The "+ newDep + " department was added!");
                menu(mainQuestion);
              });
            })
          break;
        case 'Add Employee':
          function y(){
            db.viewAllRole()
            .then((data) => {
              data[0].forEach(rol => {
                addEmpQ[2].choices.push(rol.title); 
              });
            });
            db.viewAllEmployees()
            .then((data) => {
              data[0].forEach(mang => {
                addEmpQ[3].choices.push(mang.first_name+" "+mang.last_name); 
              });
            });
          }
          y();
          console.log("emp ", addEmpQ)
          inquirer
          .prompt(addEmpQ)
          .then((data) => {
            db.addEmployee(data)
            .then(data => {
              console.log("Employee "+ data.firstName+ " "+ data.lastName + " was added!");
              menu(mainQuestion);
            });
          })
          break;
        case 'Add Role':
          function x(){
            db.viewAllDepartments()
            .then((data) => {
              data[0].forEach(dep => {
                addRoleQ[2].choices.push(dep.name); 
              });
            });
          }
          x();
          inquirer
          .prompt(addRoleQ)
          .then((data) => {
            console.log("dataR: ", data);
            db.addRole(data)
            .then(data => {
              console.log("The "+ data.title + " role was added!");
              menu(mainQuestion);
            });
          })
          break;
        case 'View All Departments':
          db.viewAllDepartments()
          .then(data => {
            console.log(' ');
            console.table(data[0]); 
            menu(mainQuestion);
          });
          break;
        case 'View All Employees':
          db.viewAllEmployees()
          .then(data => {
            console.log(' ');
            console.table(data[0]); 
            menu(mainQuestion);
          });
          break;
        case 'View All Roles':
          db.viewAllRole()
          .then(data => {
            console.log(' ');
            console.table(data[0]); 
            menu(mainQuestion);
          });
          break;
        case 'Update Employee Role':
          function z(){
            db.viewAllEmployees()
            .then((data) => {
              data[0].forEach(emp => {
                updateQ[0].choices.push(emp.first_name+" "+ emp.last_name); 
              });
              //console.log("emp ", updateQ[0].choices)
            });
            db.viewAllRole()
            .then((data) => {
              data[0].forEach(rol => {
                updateQ[1].choices.push(rol.title); 
              });
              //console.log("emp ", updateQ[1].choices)
            });
          }
          z();
          console.log("que ", updateQ)
          inquirer
          .prompt(updateQ)
          .then((data) => {
            db.updateEmpRole(data)
            .then(data => {
              console.log("The role has been updated!");
              menu(mainQuestion);
            });
          })
          break;
        default:
          console.log("Quit! Thank you!");
          process.exit(); //this will exit out of the prompt
      }
    })
}
menu(mainQuestion);
