const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    bookAuthor: String,
    bookPages: Number,
    bookPrice: Number,
    bookState: { type: String, default: "Available" }
});

module.exports = mongoose.model("Book", bookSchema);
