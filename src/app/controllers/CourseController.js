const Course = require('../models/Course.js'); // Import the Course model
const { mongooseToObject } = require('../../util/mongoose.js'); // Import utility functions for Mongoose

class CourseController {
    // [GET] /courses/:slug
    async show(req, res) {
        try {
            Course.findOne({ slug: req.params.slug })
                .then((course) => {
                    res.render('courses/show', {
                        course: mongooseToObject(course),
                    }); // Convert Mongoose object to plain JavaScript object
                })
                .catch((err) => {
                    console.error(err); // Log any errors
                    res.status(404).send('Course not found'); // Send error response
                });
        } catch (error) {
            console.error(error); // Log any errors
            res.status(500).send('Internal Server Error'); // Send error response
        }
    }
}

module.exports = new CourseController(); // Create an instance of CourseController
