const catchAsync = require("../Utills/catchAsync");

const Db = require("../Utills/DbService");
const MySql = new Db();
exports.getAllBrands = async (req, res) => {
  const brands = await MySql.getAllData("brand");
  res.status(200).json({ data: brands });
};
exports.postBrand = catchAsync(async (req, res) => {
  const { name, url } = req.body;
  await MySql.insert("brand", { name, url });
  res.status(200).json({ status: 200, msg: "Data Added Successfully" });
});
