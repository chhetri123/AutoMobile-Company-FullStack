const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");
router
  .route("/customer")
  .get(customerController.getAllCustomers)
  .post(customerController.postCustomers);
router.route("/admin").post(customerController.isAdmin);
module.exports = router;
