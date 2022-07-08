const express = require("express");
const router = express.Router();
const carController = require("../controller/carController");
router.get("/car", carController.getAllCars);
router.get("/car/:id", carController.getCar);

module.exports = router;
