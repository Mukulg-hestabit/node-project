const mysql = require("mysql2");
require("dotenv").config();

const connection = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Create a MySQL connection
const db_connection = mysql.createConnection(connection);

// Connect to MySQL
db_connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// run query and return error or response accordingly
const runQuery = (query, values) => {
  const queryResponse = new Promise((resolve, reject) => {
    db_connection.query(query, values, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });
  return runQuery;
};

module.exports = query;
