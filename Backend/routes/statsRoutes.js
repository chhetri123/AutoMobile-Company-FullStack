const express = require("express");
const router = express.Router();
const statsController = require("../controller/statsController");
router.get("/stats", statsController.getAllstats);
router.get("/getquery", statsController.getStatsOfQuery);

module.exports = router;
