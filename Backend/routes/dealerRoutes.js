const express = require("express");
const router = express.Router();
const dealerController = require("../controller/dealerController");
router
  .route("/dealer")
  .get(dealerController.getDealers)
  .post(dealerController.postDealer);

router
  .route("/inventory")
  .get(dealerController.getInventory)
  .post(dealerController.postInventory);

module.exports = router;
