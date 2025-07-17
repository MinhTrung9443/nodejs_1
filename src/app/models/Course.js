const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, default: '', maxLength: 255 },
        description: { type: String, default: '', maxLength: 600 },
        image: { type: String, default: '', maxLength: 255 },
        videoId: { type: String, default: '', maxLength: 255 },
        slug: { type: String, default: '', maxLength: 255 },
        level: { type: String, default: '', maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

const Courses = mongoose.model('Course', Course);
module.exports = Courses;
