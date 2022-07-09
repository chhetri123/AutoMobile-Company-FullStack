const express = require("express");
const router = express.Router();

const brandController = require("../controller/brandController");
const modelController = require("../controller/modelController");
const carController = require("../controller/carController");

router.get("/brand", brandController.getAllBrands);
router.get("/brand/:id/models", modelController.getModels);
router.get("/brand/:id/models/:id/cars", carController.getCarWithModelId);
router.get(
  "/brand/:id/models/:model_id/cars/:id/details",
  carController.getCarInfo
);

module.exports = router;
