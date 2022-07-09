const CarModel = require("../model/CarModel");
exports.getAllCars = async (req, res) => {
  const cars = await CarModel.getAllData("car");
  res.status(200).json(cars);
};

exports.getCar = async (req, res) => {
  const car = await CarModel.find("car", { id: req.params.id });
  res.status(200).json(car);
};

exports.getCarWithModelId = async (req, res) => {
  try {
    const car = await CarModel.find("car", { model_id: req.params.id });
    console.log(req.params);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getCarInfo = async (req, res) => {
  try {
    const car = await CarModel.queryFind("car", {
      id: req.params.id,
      model_id: req.params.model_id,
    });
    if (car.length <= 0) {
      return res.status(404).json({ msg: "Car Not Found" });
    }
    const { option_id } = car[0];
    const carInfo = await CarModel.getCarInfo(option_id, req.params.model_id);

    const [inventory] = await CarModel.getCarInventory(req.params.id);

    const dealers = await CarModel.find("dealer", {
      id: inventory.dealer_id,
    });

    delete car[0].option_id;
    car[0].options = carInfo;
    delete car[0].inventory_id;
    car[0].inventory = inventory;
    delete car[0].dealer_id;
    car[0].dealers = dealers;
    console.log(carInfo);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json(err);
  }
};
