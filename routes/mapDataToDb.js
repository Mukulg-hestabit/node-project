const db = require("../dbConnection.js");

const insertUserToTable = (values) => {
  const { name, role, password, phone, email } = values;
  if (role == "admin") return;
  const query = db.query(
    "INSERT INTO user (id,full_name,email,role,phone,password,is_teacher_approved) values (?,?,?,?,?,?)",
    [name, email, role, phone, password, false],
    (query_error, result) => {
      if (query_error) {
        error = query_error;
      }
    }
  );
  return query;
};

const getUserByID = (id, role) => {
  const query = db.query("SELECT * FROM user WHERE id=? and role=?", [
    id,
    role,
  ]);
  return query;
};

const updateUser = (id,updates)=>{
    
}

module.exports = { insertUserToTable, getUserByID };
