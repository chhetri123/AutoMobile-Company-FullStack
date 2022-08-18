const catchAsync = require("../Utills/catchAsync");

const Db = require("../Utills/DbService");
const MySql = new Db();
exports.getAllBrands = async (req, res) => {
  const brands = await MySql.getAllData("brand");
  res.status(200).json({ data: brands });
};
exports.postBrand = catchAsync(async (req, res, next) => {
  req.folderName = "brands";
  const date = new Date();
  req.file.filename = `${
    req.file.originalname.split(".")[0] + date.getTime()
  }.png`;
  const { name } = JSON.parse(req.body.data);

  await MySql.insert("brand", { name, url: req.file.filename });
  next();
});
