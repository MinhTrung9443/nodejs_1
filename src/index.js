const express = require('express');
const morgan = require('morgan');
var { engine } = require('express-handlebars'); // Import the engine function
const methodOverride = require('method-override'); // Import method-override for PUT and DELETE methods
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes/index.js'); // Import the route function
const db = require('./config/db/index.js'); // Import the database connection

// Connect to the database
db.connect();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'resources/public')));

// Method override for PUT and DELETE methods
app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app); // Initialize the routes

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
