const promise = require("./promise");

class MySql {
  static getDbServiceInstance() {
    return instance ? instance : new MySql();
  }
  constructor() {
    this.getDbServiceInstance;
  }

  showTable = async (name) => {
    try {
      const query = `SHOW TABLES`;
      const response = await promise(query, "");
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  async getAllData(name) {
    try {
      const query = `SELECT * FROM ${name}`;
      const response = await promise(query, "");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async insertData(name, data) {
    try {
      const query = `INSERT INTO ${name} SET ?`;

      const response = promise(query, data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(name, data) {
    try {
      const query = `DELETE FROM ${name} WHERE ${Object.keys(data)[0]}= ?`;
      const response = promise(query, Object.values(data)[0]);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async find(name, data) {
    try {
      const field = Object.keys(data)[0];
      const query = `SELECT * FROM ${name} WHERE ${field}= ?;`;
      const response = promise(query, Object.values(data)[0]);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateById(name, data) {
    try {
      const field = Object.keys(data)[1];
      const query = `UPDATE ${name} SET ${field} = ? WHERE ${
        Object.keys(data)[0]
      }= ?`;
      const response = promise(query, [
        Object.values(data)[1],
        Object.values(data)[0],
      ]);
      return await response;
    } catch (error) {
      return false;
    }
  }
}

module.exports = new MySql();
