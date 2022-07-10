const MySql = require("../Utills/DbService");
const promise = require("../Utills/promise");
class Sales extends MySql {
  constructor() {
    super();
  }

  async insertData(data) {
    try {
      const query = `INSERT INTO sales  SET ?`;
      return await promise(query, data);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new Sales();
