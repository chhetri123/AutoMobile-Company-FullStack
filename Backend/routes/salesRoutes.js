const express = require("express");
const router = express.Router();

const salesController = require("../controller/salesController");

router.route("/sales").get(salesController.getAllSales);

module.exports = router;
