const express = require('express');
const morgan = require('morgan');
var { engine } = require('express-handlebars'); // Import the engine function
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes/index.js'); // Import the route function
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
                   app.use(express.static(path.join(__dirname, 'resources/public')));

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
      app.set('view engine', 'hbs');
                  app.set('views', path.join(__dirname, 'resources/views'));

// Route

// Route init
route(app); // Initialize the routes

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
