const express = require("express");
const router = express.Router();
const carController = require("../controller/carController");
const fileUpload = require("../controller/fileUploadHandler");
router
  .route("/car")
  .get(carController.getAllCars)
  .post(fileUpload.uploadPhoto, carController.postCar, fileUpload.resizePhoto);
router.get("/car/:id", carController.getCar);

module.exports = router;
