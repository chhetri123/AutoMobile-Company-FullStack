const promise = require("../Utills/promise");
const MySql = require("../Utills/DbService");

class Stats extends MySql {
  constructor() {
    super();
  }

  async getAllStats() {
    const statArr = [];
    ["customer", "car", "model", "brand", "dealer", "sales"].forEach(
      async (table) => {
        const query = `select count(id) as ${table} from ${table};`;
        statArr.push(promise(query, ""));
      }
    );
    return Promise.all(statArr);
  }
  async getAllDataFromQuery(query) {
    return promise(query, "");
  }
}

module.exports = new Stats();
