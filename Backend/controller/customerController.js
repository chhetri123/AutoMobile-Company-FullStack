const Db = require("../Utills/DbService");
const MySql = new Db();
exports.getAllCustomers = async (req, res) => {
  const customers = await MySql.getAllData("customer");
  res.status(200).json({
    results: customers.length,
    customers,
  });
};
