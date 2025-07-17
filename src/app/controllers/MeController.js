class MeController {
    async storedCourses(req, res) {
        res.render('me/stored-courses');
    }
    async show(req, res) {
        res.sender('MeController.show method is not implemented yet.');
    }
}

module.exports = new MeController(); // khoi tao mot instance cua MeController
