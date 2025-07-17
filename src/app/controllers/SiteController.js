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
                    error: 'Error1 fetching courses',
                });
            });
    }

    async search(req, res) {
        res.send('Search functionality is not implemented yet.');
    }
}

module.exports = new SiteController(); // Create an instance of SiteController
