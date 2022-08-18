const express = require("express");
const router = express.Router();
const modelController = require("../controller/modelController");
const carController = require("../controller/carController");
const fileUpload = require("../controller/fileUploadHandler");
router
  .route("/model")
  .get(modelController.getAllModels)
  .post(
    fileUpload.uploadPhoto,
    modelController.postModel,
    fileUpload.resizePhoto
  );

router.get("/models/:id/cars", carController.getCarWithModelId);

module.exports = router;
