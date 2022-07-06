const MySql = require("../Utills/DbService");

exports.getCollage = async (req, res) => {
  try {
    const collage = await MySql.showTable("collage");

    res.status(200).json({ collage });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await MySql.getAllData("course");

    res.status(200).json({ results: courses.length, courses });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

exports.postCourse = async (req, res) => {
  try {
    const data = req.body;
    await MySql.insertData("course", data);
    res.status(200).json({ Msg: "Data Inserted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.deleteCourseById = async (req, res) => {
  try {
    const data = req.params;

    const items = await MySql.find("course", data);
    if (items.length <= 0) {
      throw new Error("No Data Found");
    }
    await MySql.deleteById("course", data);
    res.status(200).json({
      Msg: "Data Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.findCourse = async (req, res) => {
  try {
    const data = req.query;
    const response = await MySql.find("course", data);
    res.status(200).json({
      result: response.length,
      data: response,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.updateCourse = async (req, res) => {
  try {
    const data = req.params;
    data[Object.keys(req.body)[0]] = Object.values(req.body)[0];
    let response = await MySql.updateById("course", data);
    if (response) {
      response = "Data Updated Successfully";
    } else {
      throw new Error("Problem in Updating Data");
    }
    res.status(200).json({
      data: response,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
