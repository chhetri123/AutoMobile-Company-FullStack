const CarModel = require("../model/CarModel");
const catchAsync = require("../Utills/catchAsync");

exports.getAllCars = async (req, res) => {
  const cars = await CarModel.getAllData("car");
  res.status(200).json({data:cars});
};

exports.getCar = async (req, res) => {
  const car = await CarModel.find("car", { id: req.params.id });
  res.status(200).json(car);
};

exports.getCarWithModelId = async (req, res) => {
  try {
    const car = await CarModel.find("car", { model_id: req.params.id });
    const [{ name }] = await CarModel.find("model", { id: req.params.id });
    res.status(200).json({ model: name, car });
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
      return res.status(404).json({ status: 404, msg: "Car Not Found" });
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

    res.status(200).json(car);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.postCar = catchAsync(async (req, res) => {
  const { VIN, name, url, modelId } = req.body.car;
  const { power, torque, fuelType, speed } = req.body.engine;
  const { frontSus, rearSus, frontBrake, rearBrake } = req.body.specs;
  const { color } = req.body.option;

  const engine = await CarModel.insert("engine", {
    power,
    torque,
    fuel_type: fuelType,
    speed,
  });

  const specs = await CarModel.insert("specs", {
    font_sus: frontSus,
    rear_sus: rearSus,
    front_brake: frontBrake,
    rear_brake: rearBrake,
  });
  const option = await CarModel.insert("options", {
    color,
    engine_id: engine.insertId,
    specs_id: specs.insertId,
    model_id: modelId,
  });
  const car = await CarModel.insert("car", {
    VIN,
    name,
    url,
    model_id: modelId,
    option_id: option.insertId,
  });
  res.status(200).json({ status: 200, car });
});
