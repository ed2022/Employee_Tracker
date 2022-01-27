const connection = require('./connection'); //requiring this to be able to create connection 

class DB {
    constructor(connection){
        this.connection = connection; 
    } 
    addDepartment(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    addEmployee(emp){
        return this.connection.promise().query(
        'INSERT INTO employees SET ?', emp)
    }
    addRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    findAll(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    viewAllDepartments(){ //returns table
        return this.connection.promise().query(
        'SELECT departments.id, departments.name FROM departments'
    )}
    viewAllEmployees(){ //returns table
        return this.connection.promise().query(
        'SELECT employees.id, employees.first_name, employees.last_name, roles.title AS roles, roles.departments_id AS departments, roles.salary AS salary, employees.managers_id AS manager FROM employees LEFT JOIN roles ON employees.roles_id = roles.id;'
    )}
    viewAllRole(){ //returns roles table
        return this.connection.promise().query(
        'SELECT roles.id, roles.title, departments.name AS departments, roles.salary FROM roles LEFT JOIN departments  ON roles.departments_id = departments.id;'
    )}
    updateEmpRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
}

module.exports = new DB(connection); 
