const Db = require("../Utills/DbService");
const MySql = new Db();

exports.getOptionID = async (req, res, next) => {
  const options = await MySql.getAllData("options", { id: req.params.id });
};
