const MySql = require("../Utills/DbService");

exports.getCustomer = async (req, res) => {
  const customers = await MySql.getAllData("customer");
  res.status(200).json({
    results: customers.length,
    customers,
  });
};
