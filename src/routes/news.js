const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.use("/:slug", newsController.show); // Use the show method for /news/:slug route
router.use("/", newsController.index); // Use the index method from NewsController for /news route

module.exports = router;
