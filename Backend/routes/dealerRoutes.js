const express = require("express");
const router = express.Router();
const carController = require("../controller/dealerController");
router
  .route("/dealer")
  .get(carController.getDealers)
  .post(carController.postDealer);

module.exports = router;
