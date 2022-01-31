const connection = require('./connection'); //requiring this to be able to create connection 

class DB {
    constructor(connection) {
        this.connection = connection;
    }
    //takes in a deconstructed object from main index prompt
    addDepartment(newDep) {
        return this.connection.promise().query('INSERT INTO department(name) VALUES (?)', newDep)
    }
    addEmployee(data) {
        return this.connection.promise().query(
            `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES("${data.firstName}", "${data.lastName}", (SELECT id FROM role WHERE title = "${data.empRole}"), (SELECT id FROM (SELECT id FROM employee WHERE CONCAT(first_name," ",last_name) = "${data.manager}") AS dataTable))`
        )
    }
    addRole(data) {
        return this.connection.promise().query(
            `INSERT INTO role(title, salary, department_id) VALUES("${data.title}", "${data.salary}", (SELECT department.id FROM department WHERE department.name = "${data.dep}"))`
        )
    }
    viewAllDepartments() { //returns table
        return this.connection.promise().query(
            'SELECT department.id AS id, department.name AS name FROM department;'
        )
    }
    viewAllEmployees() { //returns table
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title AS role, department.name AS department, role.salary AS salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
        )
    }
    viewAllRole() { //returns roles table
        return this.connection.promise().query(
            'SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department  ON role.department_id = department.id;'
        )
    }
    updateEmpRole() {
        return this.connection.promise().query(
            'UPDATE employee SET role_id = (SELECT id FROM role WHERE title = "${data.updatedRole}") WHERE id = (SELECT id FROM(SELECT id FROM employee WHERE CONCAT(first_name," ",last_name) = "${data.employee}") AS dataTable)'
        )
    }
}

module.exports = new DB(connection); 
