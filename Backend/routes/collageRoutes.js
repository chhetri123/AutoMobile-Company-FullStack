const express = require("express");
const router = express.Router();
const path = require("path");

const courseController = require("../controller/courseController");

router.get("/", courseController.getCollage);
router.get("/course", courseController.getAllCourses);
router.get("/searchCourse", courseController.findCourse);
router.post("/course", courseController.postCourse);
router.delete("/deleteCourse/:course_id", courseController.deleteCourseById);
router.patch("/updateCourse/:course_id", courseController.updateCourse);

router.get("/postCourse", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/Course.html"));
});

router.get("/post", courseController.postCourse);
module.exports = router;
