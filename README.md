# Employee_Tracker

## Description

This is a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL. This sort of enviornment is also known as the **content management systems (CMS)**.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Criteria Provided by Client 

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role- DONE 

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids- DONE

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role- DONE

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to - DONE

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database- DONE

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```





## Installation 
All that is required is to have the following in your terminal: 
- npm install 
- npm start

## Navigation and Demo 

As soon as you finsih the install, you will then prompted a series of questions that will allow you to add, update and view departments, roles and employees.  

Please do make sure to answer every question to make sure everything flows through. 

The following video shows an example of the application being used from the command line:

![How the app works.](Assets/tracker.gif) 
## Resources

- [MySQL2 package](https://www.npmjs.com/package/mysql2)
- [Inquirer package](https://www.npmjs.com/package/inquirer)
- [console.table package](https://www.npmjs.com/package/console.table)
- [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

## Links 
- Video link: https://drive.google.com/file/d/13gBwra2m_pryiGqvdL4yCQo_oh7y2YY_/view?usp=sharing
- GitHub repositor: https://github.com/ed2022/Employee_Tracker.git