const express = require('express');
const bodyParser = require('body-parser');

const books = [
    { bookName: "Rudest Book Ever", bookAuthor: "Shwetabh Gangwar", bookPages: 200, bookPrice: 240, bookState: "Available" },
    { bookName: "Do Epic Shit", bookAuthor: "Ankur Wariko", bookPages: 200, bookPrice: 240, bookState: "Available" }
];

const issuedBooks = [];

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home", { books, issuedBooks });
});

app.post("/issue", (req, res) => {
    const { bookName, customerName, customerContact } = req.body;
    
    books.forEach(book => {
        if (book.bookName === bookName) {
            book.bookState = "Issued";
            issuedBooks.push({ bookName, customerName, customerContact });
        }
    });

    res.redirect("/");
});

app.listen(3000, () => console.log("App running on port 3000"));
