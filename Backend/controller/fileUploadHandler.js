const multer = require("multer");
const sharp = require("sharp");
const catchAsync = require("../Utills/catchAsync");
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not acceptable file"), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});
exports.uploadPhoto = upload.single("file");
exports.resizePhoto = catchAsync(async (req, res, next) => {
  await sharp(req.file.buffer).toFile(
    `public/images/${req.folderName}/${req.file.filename}`
  );
  res.status(200).json({ status: 200, msg: "Data inserted Successfully" });
});
