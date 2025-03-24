
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    bookAuthor: String,
    bookPages: Number,
    bookPrice: Number,
    bookState: { type: String, default: "Available" },
    borrower: {
        name: String,
        phone: String,
        email: String,
        address: String
    }
});

module.exports = mongoose.model("Book", bookSchema);


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     bookName: String,
//     bookAuthor: String,
//     bookPages: Number,
//     bookPrice: Number,
//     bookState: { type: String, default: "Available" }
// });

// module.exports = mongoose.model("Book", bookSchema);
