const mysql = require("./server");
const express = require("express");
const app = express();
require("dotenv").config({ path: "./config.env" });

const path = require("path");
const bodyParser = require("body-parser");
let cors = require("cors");

// const carRoutes = require("./routes/carRoutes");
const customerRoutes = require("./routes/customerRoutes");
const carRoutes = require("./routes/carRoutes");
const brandRoutes = require("./routes/brandRoutes");
const modelRoutes = require("./routes/modelRoutes");
const statsRoutes = require("./routes/statsRoutes");
const dealerRoutes = require("./routes/dealerRoutes");
const salesRoutes = require("./routes/salesRoutes");

//
const port = 3000 || process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", customerRoutes);
app.use("/api/v1", carRoutes);
app.use("/api/v1", brandRoutes);
app.use("/api/v1", modelRoutes);
app.use("/api/v1", statsRoutes);
app.use("/api/v1", dealerRoutes);
app.use("/api/v1", salesRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ status: 404, msg: "Page not found" });
});
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV == "development") {
    console.log(err);
  }
  res.status(500).json({ status: 500, msg: err.message });
});

mysql.query("SELECT 1+1", function (err, rows, fields) {
  if (err) {
    throw err;
  }
  app.listen(port, () => {
    if (process.env.NODE_ENV === "development") {
      console.log("Server listening on port", port);
      console.log("Database Connected ");
    }
  });
});
