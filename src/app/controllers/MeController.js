const courses = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class MeController {
    async storedCourses(req, res) {
        courses
            .find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )

            .catch((err) => res.status(500).send(err.message));
    }
    async show(req, res) {
        res.send('MeController.show method is not implemented yet.');
    }
}

module.exports = new MeController(); // khoi tao mot instance cua MeController
