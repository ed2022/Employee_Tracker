const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Stayhumble789',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

module.exports = connection; 