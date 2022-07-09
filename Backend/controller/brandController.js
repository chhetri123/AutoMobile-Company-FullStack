const Db = require("../Utills/DbService");
const MySql = new Db();
exports.getAllBrands = async (req, res) => {
  const brands = await MySql.getAllData("brand");
  res.status(200).json(brands);
};
