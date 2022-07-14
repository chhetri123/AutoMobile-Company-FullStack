const catchAsync = require("../Utills/catchAsync");

const Db = require("../Utills/DbService");
const MySql = new Db();
exports.getAllBrands = async (req, res) => {
  const brands = await MySql.getAllData("brand");
  res.status(200).json(brands);
};
exports.postBrand = catchAsync(async (req, res) => {
  const { name, url } = req.body;
  const brand = await MySql.insert("brand", { name, url });
  res.status(200).json(brand);
});
