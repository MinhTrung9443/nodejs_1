const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, default: '', maxLength: 255 },
        description: { type: String, default: '', maxLength: 600 },
        image: { type: String, default: '', maxLength: 255 },
        videoId: { type: String, default: '', maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
        level: { type: String, default: '', maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

const Courses = mongoose.model('Course', Course);
module.exports = Courses;
