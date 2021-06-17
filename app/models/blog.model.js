const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);
