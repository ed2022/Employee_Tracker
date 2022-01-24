const connection = require('./connection'); //requiring this to be able to create connection 

class db { 
    findAll(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    addEmployee(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    updateEmpRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    viewAllRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    addRole(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    viewAllDepartments(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
    addDepartment(){
        return this.connection.promise().query(
        'SELECT * FROM employee'
    )}
}

module.export = new db(connection); 