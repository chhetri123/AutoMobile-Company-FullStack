const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");
router.get("/customer", customerController.getAllCustomers);
router.post("/customer", customerController.postCustomers);

module.exports = router;
