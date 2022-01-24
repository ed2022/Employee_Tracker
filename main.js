//REQUIRE INSTALLS- from Node Library
const inquirer = require('inquirer'); //Inquire prompt 
const fs = require('fs'); // requiring so that we can build the HTML File
//Require the folder- this will allow us to do the following - db.findAll(); - placing this in a db.query mode to update the following data
const db = require('./db'); 
const {console} = require('console.table');

const mainQuestion = [  {
    type: 'list',
    name: 'pick',
    message: 'What would you like to do? ',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Role', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
  }
]

function menu(mainQuestion){
    inquirer
    .prompt(mainQuestion)
    .then((data) => { 
      switch (data.pick) {
        case 'View All Employees':
          db.findAll(); 
          break;
        case 'Add Employee':
          db.addEmployee(); 
          break;
        case 'Update Employee Role':
          db.updateEmpRole();
          break;
        case 'View All Role':
          db.viewAllRole(); 
          break;
        case 'Add Role':
          db.addRole(); 
          break;
        case 'View All Departments':
          db.viewAllDepartments();
          break;
        case 'Add Department':
          db.addDepartment()
          break;
        default:
          console.log("Quit! Thank you!")
          break;
      }
      menu(mainQuestion);
    })
}
menu(mainQuestion); 