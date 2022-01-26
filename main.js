//REQUIRE INSTALLS- from Node Library
const inquirer = require('inquirer'); //Inquire prompt 
const db = require('./db/index'); 
const cTable = require('console.table');

const departmentList = [];
const roleList = [];

const mainQuestion = [{
    type: 'list',
    name: 'pick',
    message: 'What would you like to do? ',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Role', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
}]
const addDepQ = [{
    type: 'input',
    name: 'addDepName',
    message: 'What is the name of the department? ',
}]
const addEmpQ = [
  {
    type: 'input',
    name: 'addEmpFName',
    message: 'What is the first name of the employee? ',
  }, 
  {
    type: 'input',
    name: 'addEmpLName',
    message: 'What is the last name of the employee? ',
  },
  {
    type: 'list',
    name: 'empRole',
    message: 'Which role does the employee belong too?',
    choices: [roleList]
  },
  {
    type: 'list',
    name: 'maName',
    message: 'Who is the employee\'s manager',
    choices: []
  }
  
]
const addRoleQ = [
  {
    type: 'input',
    name: 'addRoleName',
    message: 'What is the name of the role? ',
  },
  {
    type: 'input',
    name: 'roleSalary',
    message: 'What is the salary of the role? ',
  },
  {
    type: 'list',
    name: 'roleDep',
    message: 'Which department does the role belong too?',
    choices: [departmentsList]
  }
]
const updateQ = [
  {
    type: 'list',
    name: 'updateRole',
    message: 'Which employee\'s role do you want to update?',
    choices: []
  },
  {
    type: 'list',
    name: 'reassigRole',
    message: 'Which role do you want to assign the selected employee?',
    choices: []
  },
]
 
console.log( ' ________________________________________________');
console.log('|                                                |');
console.log('|          EMPLOYEE  MANAGER  DATABASE           |');
console.log('|________________________________________________|\n');

function menu(mainQuestion){
    inquirer
    .prompt(mainQuestion)
    .then((data) => { 
      switch (data.pick) {
        case 'Add Department':
          moreQues(addDepQ); 
          break;
        case 'Add Employee':
          moreQues(addEmpQ);
          break;
        case 'Add Role':
          moreQues(addRoleQ);
          break;
        case 'View All Departments':
          viewAllDepartments();
          menu(mainQuestion);
          break;
        case 'View All Employees':
          viewAllEmployees();
          menu(mainQuestion); 
          break;
        case 'View All Role':
          viewAllRole();
          menu(mainQuestion); 
          break;
        case 'Update Employee Role':
          moreQues(updateQ);
          break;
        default:
          console.log("Quit! Thank you!")
          break;
      }
    })
}
menu(mainQuestion); 

function moreQues(addQues){
  inquirer
  .prompt(addQues)
  .then((data) => {
     if(data.addDepA !== ''){
        addDepartment(data.addDepName); 
        departmentList.push(data.addDepName);
        console.log("Added " + data.addDepName + "to the database."); 
        menu(mainQuestion);
     }
     else if(data.addEmpA !== ''){
        addEmployee(data.addEmpFName, data.addEmpLName, data.empRole);
        console.log("Added " + data.addEmpFName +" "+ data.addEmpLName+ "to the database.");  
        menu(mainQuestion);
      }
      else if(data.addRoleName !== ''){
        addRole(data.addRoleName, data.roleSalary); 
        console.log("Added " + data.addRoleName + "to the database."); 
        menu(mainQuestion);
      }
      else if(data.updateRole !== ''){
        updateEmpRole()(data.addRoleName, data.roleSalary); 
        console.log("Updated employees role"); 
        menu(mainQuestion);
      }
      else{
        console.log("This is the moreQues function!")
      }
   })
}