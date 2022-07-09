const promise = require("./promise");

class MySql {
  static getDbServiceInstance() {
    return instance ? instance : new MySql();
  }
  constructor() {
    this.getDbServiceInstance;
  }

  showTable = async () => {
    try {
      const query = `SHOW TABLES`;
      return await promise(query, "");
    } catch (error) {
      throw new Error(error);
    }
  };
  async getAllData(name) {
    try {
      const query = `SELECT * FROM ${name}`;
      return await promise(query, "");
    } catch (error) {
      throw new Error(error);
    }
  }

  async insertData(name, data) {
    try {
      const query = `INSERT INTO ${name} SET ?`;

      return await promise(query, data);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteById(name, data) {
    try {
      const query = `DELETE FROM ${name} WHERE ${Object.keys(data)[0]}= ?`;
      return await promise(query, Object.values(data)[0]);
    } catch (error) {
      throw new Error(error);
    }
  }
  async find(name, data) {
    try {
      const field = Object.keys(data)[0];
      const query = `SELECT * FROM ${name} WHERE ${field}= ?;`;
      return await promise(query, Object.values(data)[0]);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateById(name, data) {
    try {
      const field = Object.keys(data)[1];
      const query = `UPDATE ${name} SET ${field} = ? WHERE ${
        Object.keys(data)[0]
      }= ?`;
      return await promise(query, [
        Object.values(data)[1],
        Object.values(data)[0],
      ]);
    } catch (error) {
      throw new Error(error);
    }
  }
  async queryFind(name, data) {
    try {
      const query = `SELECT * FROM ${name} WHERE ${
        Object.keys(data)[0]
      }= ? AND ${Object.keys(data)[1]}= ?`;
      return await promise(query, [
        Object.values(data)[0],
        Object.values(data)[1],
      ]);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = MySql;
