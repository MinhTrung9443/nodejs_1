const newsRouter = require('./news'); // Import the news router
const siteRouter = require('./site'); // Import the site router

function route(app) {
    app.use('/news', newsRouter); // Use the news router for /news route

    app.get('/search', (req, res) => {
        console.log(req.query);
        res.render('search');
    });

    app.use('/', siteRouter); // Use the site router for root route
}

module.exports = route; // Export the route function
