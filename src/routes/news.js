const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show); // Use the show method for /news/:slug route
router.get('/', newsController.index); // Use the index method from NewsController for /news route

module.exports = router;
