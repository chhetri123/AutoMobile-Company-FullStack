const mysql = require("./server");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
let cors = require("cors");

// const carRoutes = require("./routes/carRoutes");
const customerRoutes = require("./routes/customerRoutes");
const carRoutes = require("./routes/carRoutes");
const brandRoutes = require("./routes/brandRoutes");
const modelRoutes = require("./routes/modelRoutes");

//
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1", customerRoutes);
app.use("/api/v1", carRoutes);
app.use("/api/v1", brandRoutes);
app.use("/api/v1", modelRoutes);

app.use(brandRoutes);
app.use("*", (req, res) => {
  console.log(req.query);
  res.send("<h1>404</h1> <p>Page not found</p>");
});
mysql.getConnection((err, connection) => {
  if (err) {
    throw err;
  }
  app.listen(port, () => {
    console.log("Server listening on port", port);
    console.log("Database Connected ");
  });
});
