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
        console.log("Reached");
        return this.connection.promise().query(
        'SELECT departments.id, department.name FROM departments;'
    )}
    viewAllEmployees(){ //returns table
        return this.connection.promise().query(
        'SELECT * FROM department;'
    )}
    viewAllRole(){ //returns table
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    updateEmpRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
}

module.export = new DB(connection); 
