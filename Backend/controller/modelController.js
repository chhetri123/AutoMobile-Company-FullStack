const Db = require("../Utills/DbService");
const MySql = new Db();
exports.getModels = async (req, res) => {
  const models = await MySql.find("model", { brand_id: req.params.id });
  const [{ name }] = await MySql.find("brand", { id: req.params.id });
  res.status(200).json({ brand: name, models });
};

exports.getAllModels = async (req, res) => {
  try {
    const models = await MySql.getAllData("model");
    res.status(200).json({ models });
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};

exports.postModel = async (req, res) => {
  try {
    const { name, url, year, bodyStyle, brand_id } = req.body;
    const model = await MySql.insert("model", {
      name,
      url,
      year,
      body_style: bodyStyle,
      brand_id,
    });
    res.status(200).json({ model });
  } catch (err) {
    res.status(500).json({ msg: err.msg });
  }
};
