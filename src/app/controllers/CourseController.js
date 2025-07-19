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
    // [GET] /courses/create
    async create(req, res) {
        try {
            res.render('courses/create');
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    // [POST] /courses/store
    async store(req, res) {
        try {
            const course = new Course(req.body);
            course.image = `https://img.youtube.com/vi/${course.videoId}/sddefault.jpg`;
            await course.save();
            res.redirect(`/courses/${course.slug}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    // [GET] /courses/:id/edit
    async edit(req, res) {
        try {
            Course.findOne({ _id: req.params.id })
                .then((course) => {
                    res.render('courses/edit', {
                        course: mongooseToObject(course),
                    });
                })
                .catch((err) => {
                    console.error(err);
                    res.status(404).send('Course not found');
                });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    // [PUT] /courses/:id
    async update(req, res) {
        try {
            const course = await Course.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true,
                },
            );
            if (!course) {
                return res.status(404).send('Course not found');
            }
            course.image = `https://img.youtube.com/vi/${course.videoId}/sddefault.jpg`;
            await course.save();
            res.redirect(`/me/stored/courses`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    // [DELETE] /courses/:id
    async destroy(req, res) {
        try {
            const course = await Course.findByIdAndDelete(req.params.id);
            if (!course) {
                return res.status(404).send('Course not found');
            }
            res.redirect(`/me/stored/courses`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new CourseController(); // Create an instance of CourseController
