const Db = require("../Utills/DbService");
const MySql = new Db();
const catchAsync = require("../Utills/catchAsync");

exports.getDealers = catchAsync(async (req, res) => {
  const dealers = await MySql.getAllData("dealer");
  res.status(200).json({ status: 200, data: dealers });
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

exports.getInventory = catchAsync(async (req, res) => {
  const inventory = await MySql.getAllData("inventory");
  res.status(200).json({ status: 200, data: inventory });
});
exports.postInventory = catchAsync(async (req, res) => {
  const { name, address, dealerID } = req.body;
  const inventory = await MySql.insert("inventory", {
    name,
    address,
    dealer_id: dealerID,
  });
  console.log(dealer);
  res.status(200).json(inventory);
});
