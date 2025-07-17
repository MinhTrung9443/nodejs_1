const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create); // Route for creating a course
router.post('/store', courseController.store); // Route for storing a new course
router.get('/:slug', courseController.show); // Route for listing courses

module.exports = router;
