const Course = require('../models/Course.js'); // Import the Course model
const { multipleMongooseToObject } = require('../../util/mongoose.js'); // Import utility functions for Mongoose

class SiteController {
    async index(req, res) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                res.status(400).json({
                    error: 'Error fetching courses',
                });
            });
    }

    async search(req, res) {
        const query = req.query.q;
        Course.find({ title: { $regex: query, $options: 'i' } })
            .then((courses) => {
                res.json(courses);
            })
            .catch((err) => {
                res.status(400).json({
                    error: 'Error searching courses',
                });
            });
    }
}

module.exports = new SiteController(); // Create an instance of SiteController
