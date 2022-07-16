const Sales = require("../model/saleModel");
const catchAsync = require("../Utills/catchAsync");

exports.getAllSales = catchAsync(async (req, res) => {
  const sales = await Sales.getAllSalesData();
  res.status(200).json({ status: 200, data: sales });
});
