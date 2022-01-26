const connection = require('./connection'); //requiring this to be able to create connection 

class dataBase { 
    addDepartment(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    addEmployee(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
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
        'SELECT * FROM department;'
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

module.export = new dataBase(connection); 