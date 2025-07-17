const newsRouter = require('./news'); // Import the news router
const siteRouter = require('./site'); // Import the site router
const courseRouter = require('./courses'); // Import the courses router
function route(app) {
    app.use('/news', newsRouter); // Use the news router for /news route

    app.use('/courses', courseRouter);

    app.use('/', siteRouter); // Use the site router for root route
}

module.exports = route; // Export the route function
