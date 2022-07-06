const mysql = require("./server");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
let cors = require("cors");

const collageRoutes = require("./routes/collageRoutes");
const customerRoutes = require("./routes/customerRoutes");

const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(collageRoutes);
app.use(customerRoutes);
mysql.getConnection((err, connection) => {
  if (err) {
    throw err;
  }
  app.listen(port, () => {
    console.log("Server listening on port", port);
    console.log("Database Connected ");
  });
});
