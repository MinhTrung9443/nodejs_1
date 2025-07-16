const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.use("/:slug", siteController.search); // Use the search method for /news/:slug route
router.use("/", siteController.index); // Use the index method from siteController for /news route

module.exports = router;
