const SalesModel = require("../model/saleModel");
const CustomerModel = require("../model/customerModel");
exports.getAllCustomers = async (req, res) => {
  const customers = await CustomerModel.getAllData("customer");
  res.status(200).json({
    results: customers.length,
    data: customers,
  });
};

exports.postCustomers = async (req, res) => {
  try {
    const { name, address, email, phone, gender, income, dealer_id } = req.body;
    const response = await CustomerModel.queryFind("customer", {
      email,
      phone,
      name,
    });

    if (response.length === 0) {
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
        prices: 20000,
      });
    } else {
      await SalesModel.insertData({
        customer_id: response[0].id,
        dealer_id,
        prices: 20000,
      });
    }

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
