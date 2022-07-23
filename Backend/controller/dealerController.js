const Db = require("../Utills/DbService");
const MySql = new Db();
const catchAsync = require("../Utills/catchAsync");

exports.getDealers = catchAsync(async (req, res) => {
  const dealers = await MySql.getAllData("dealer");
  res.status(200).json({ status: 200, data: dealers });
});

exports.postDealer = catchAsync(async (req, res) => {
  const { name, address, phone, inventoryID } = req.body;

  await MySql.insert("dealer", {
    name,
    address,
    phone,
    inventory_id: inventoryID,
  });

  res.status(200).json({ status: 200, msg: "Data added successfully" });
});

exports.getInventory = catchAsync(async (req, res) => {
  const inventory = await MySql.getAllData("inventory");
  res.status(200).json({ status: 200, data: inventory });
});
exports.postInventory = catchAsync(async (req, res) => {
  const { name, address } = req.body;
  const inventory = await MySql.insert("inventory", {
    name,
    address,
  });
  res.status(200).json({ status: 200, data: inventory });
});
