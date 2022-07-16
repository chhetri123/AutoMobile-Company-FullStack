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

  async getAllSalesData() {
    try {
      const query = `select S.id ,C.name as Customer_Name ,C.phone,S.purchase_date,S.prices,dealer.name as Dealer_Name from (sales as S join customer as C on C.id=S.customer_id) join dealer on dealer.id=S.dealer_id;`;
      return await promise(query);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new Sales();
