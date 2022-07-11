const express = require("express");
const router = express.Router();
const modelController = require("../controller/modelController");
const carController = require("../controller/carController");
router.get("/model", modelController.getAllModels);
router.get("/models/:id/cars", carController.getCarWithModelId);

module.exports = router;
