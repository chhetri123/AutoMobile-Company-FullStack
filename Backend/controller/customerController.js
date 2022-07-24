const SalesModel = require("../model/saleModel");
const CustomerModel = require("../model/customerModel");
const catchAsync = require("../Utills/catchAsync");
exports.getAllCustomers = async (req, res) => {
  const customers = await CustomerModel.getAllData("customer");
  res.status(200).json({
    results: customers.length,
    data: customers,
  });
};
exports.isAdmin = catchAsync(async (req, res) => {
  if (!req.body.email) throw new Error("Email is required");
  const admin = await CustomerModel.find("admin", { email: req.body.email });
  if (admin.length > 0) {
    res.status(200).json({ status: 200, msg: "Admin logged in successfully" });
  } else {
    res.status(404).json({ status: 404, msg: "Admin not found" });
  }
});
exports.postCustomers = async (req, res) => {
  try {
    const { name, address, email, phone, gender, income, dealer_id, carID } =
      req.body;

    const carid = await CustomerModel.find("car", { id: carID });
    const response = await CustomerModel.insertData({
      name,
      email,
      address,
      phone,
      gender,
      annual_income: income,
      dealer_id,
    });

    await SalesModel.insertData({
      customer_id: response.insertId,
      dealer_id,
      prices: carid[0].price,
    });
    await CustomerModel.updateById("car", {
      id: carID,
      customer_id: response.insertId,
    });
    res.status(200).json({
      status: 200,
      msg: "Data Inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      msg: err.message.split(":")[2],
    });
  }
};
