const mysql = require("../server");
module.exports = (query, data) => {
  return new Promise((resolve, reject) => {
    mysql.query(query, data, (err, results) => {
      if (err) reject(new Error(err.message));
      resolve(results);
    });
  });
};
