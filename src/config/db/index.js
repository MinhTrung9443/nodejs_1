const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        throw err; // Re-throw the error for further handling
    }
}

module.exports = { connect };
