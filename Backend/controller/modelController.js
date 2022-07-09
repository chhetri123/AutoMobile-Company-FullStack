const Db = require("../Utills/DbService");
const MySql = new Db();
exports.getModels = async (req, res) => {
  const models = await MySql.find("model", { brand_id: req.params.id });
  res.status(200).json(models);
};
