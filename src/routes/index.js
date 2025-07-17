const newsRouter = require('./news'); // Import the news router
const siteRouter = require('./site'); // Import the site router
const courseRouter = require('./courses'); // Import the courses router
const meRouter = require('./me'); // Import the me router

function route(app) {
    app.use('/news', newsRouter);

    app.use('/courses', courseRouter);

    app.use('/me', meRouter);

    app.use('/', siteRouter);
}

module.exports = route; // Export the route function
