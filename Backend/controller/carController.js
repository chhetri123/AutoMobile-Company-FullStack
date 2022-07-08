const MySql = require("../Utills/DbService");

exports.getAllCars = async (req, res) => {
  const cars = await MySql.getAllData("car");
  res.status(200).json(cars);
};

exports.getCar = async (req, res) => {
  const car = await MySql.find("car", { id: req.params.id });
  res.status(200).json(car);
};
