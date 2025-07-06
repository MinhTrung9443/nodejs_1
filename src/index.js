const express = require("express");
const morgan = require("morgan");
var { engine } = require("express-handlebars"); // Import the engine function
const path = require("path");
const app = express();
const port = 3000;

// Static files
app.use(express.static(path.join(__dirname, "resources/public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("new");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
