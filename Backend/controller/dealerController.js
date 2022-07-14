const Db = require("../Utills/DbService");
const MySql = new Db();
const catchAsync = require("../Utills/catchAsync");

exports.getDealers = catchAsync(async (req, res) => {
  const dealers = await MySql.getAllData("dealer");
  res.status(200).json({ status: 200, dealers });
});

exports.postDealer = catchAsync(async (req, res) => {
  const { name, address, phone } = req.body;
  console.log(req.query);
  const dealer = await MySql.insert("dealer", {
    name,
    address,
    phone,
  });
  console.log(dealer);
  res.status(200).json(dealer);
});
