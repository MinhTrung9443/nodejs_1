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
                    res.status(404).send('Course not found');
                });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async create(req, res) {
        try {
            res.render('courses/create');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }

    async store(req, res) {
        try {
            const course = new Course(req.body);
            course.slug = course.name.toLowerCase().replace(/ /g, '-');
            course.image = `https://img.youtube.com/vi/${course.videoId}/sddefault.jpg`;
            await course.save();
            res.redirect(`/courses/${course.slug}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new CourseController(); // Create an instance of CourseController
