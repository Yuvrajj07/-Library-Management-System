require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));


    // 📌 Route: Home Page - Display Books
app.get("/", async (req, res) => {
    const books = await Book.find();
    res.render("home", { books });
});

// 📌 Route: Render Add Book Page
app.get("/addBook", (req, res) => {
  res.render("addBook");
});

// 📌 Route: Add New Book
app.post("/add", async (req, res) => {
    const { bookName, bookAuthor, bookPages, bookPrice } = req.body;

    const newBook = new Book({
        bookName,
        bookAuthor,
        bookPages: Number(bookPages),
        bookPrice: Number(bookPrice),
        bookState: "Available"
    });

    await newBook.save();
    res.redirect("/");
});

// 📌 Route: Issue Book
app.post("/issue", async (req, res) => {
    const { bookName, customerName, customerPhone, customerEmail, customerAddress } = req.body;
    
    await Book.findOneAndUpdate(
        { bookName, bookState: "Available" },
        { 
            bookState: "Issued", 
            borrower: {
                name: customerName,
                phone: customerPhone,
                email: customerEmail,
                address: customerAddress
            }
        }
    );
    
    res.redirect("/");
});

// app.post("/issue", async (req, res) => {
//     const { bookName } = req.body;
//     await Book.findOneAndUpdate({ bookName, bookState: "Available" }, { bookState: "Issued" });
//     res.redirect("/");
// });

// 📌 Route: Return Book
app.post("/return", async (req, res) => {
    const { bookName } = req.body;
    await Book.findOneAndUpdate({ bookName, bookState: "Issued" }, { bookState: "Available" });
    res.redirect("/");
});

// 📌 Route: Delete Book
app.post("/delete", async (req, res) => {
    const { bookName } = req.body;
    await Book.findOneAndDelete({ bookName });
    res.redirect("/");
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
