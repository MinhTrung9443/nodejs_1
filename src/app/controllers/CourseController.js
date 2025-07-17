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

    async create(req, res) {
        try {
            res.render('courses/create'); // Render the course creation page
        } catch (error) {
            console.error(error); // Log any errors
            res.status(500).send('Internal Server Error'); // Send error response
        }
    }

    async store(req, res) {
        try {
            const course = new Course(req.body);
            course.slug = course.name.toLowerCase().replace(/ /g, '-'); // Generate slug from course name
            course.image = `https://img.youtube.com/vi/${course.videoId}/sddefault.jpg`; // Set image URL based on YouTube video ID
            await course.save(); // Save the course to the database
            res.redirect(`/courses/${course.slug}`); // Redirect to the newly created course's page
        } catch (error) {
            console.error(error); // Log any errors
            res.status(500).send('Internal Server Error'); // Send error response
        }
    }
}

module.exports = new CourseController(); // Create an instance of CourseController
