const express = require("express");
const router = express.Router();
const carController = require("../controller/carController");
router.route("/car").get(carController.getAllCars).post(carController.postCar);
router.get("/car/:id", carController.getCar);

module.exports = router;
