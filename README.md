# -Library-Management-System

# 📚 Library Management System

## 📌 Project Overview
The **Library Management System** is a web application built with **Node.js, Express.js, MongoDB, and EJS** to manage book records, including adding, issuing, returning, and deleting books. It provides a user-friendly interface for efficient library management.

## 🚀 Features
- 📖 **Add New Books** - Store book details such as name, author, pages, and price.
- 📌 **Issue Books** - Issue books to customers and store their details.
- 🔄 **Return Books** - Mark issued books as returned.
- ❌ **Delete Books** - Remove books from the library.
- 📊 **Real-time Book Status** - Track book availability dynamically.

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Bootstrap, HTML, CSS
- **Database:** MongoDB (Mongoose ODM)

## 📂 Project Structure
```
📁 library-management-system
│-- 📁 models
│   ├── Book.js         # Mongoose schema for books
│-- 📁 views
│   ├── home.ejs        # Main UI for managing books
│   ├── addBook.ejs     # Form to add new books
│-- 📁 public
│   ├── style.css       # Custom styling
│-- 📄 .env             # Environment variables (MongoDB connection string)
│-- 📄 server.js        # Main server file
│-- 📄 package.json     # Project dependencies and scripts
```

## 🔧 Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up environment variables**
   - Create a `.env` file and add your MongoDB URI:
     ```env
     MONGO_URI=your_mongodb_connection_string
     ```
4. **Run the application**
   ```bash
   npm start
   ```
5. **Open in browser**
   - Visit `http://localhost:3000`

## 📝 Usage
- Open the application and add new books.
- Issue a book by entering customer details.
- Return books to mark them as available again.
- Delete books when no longer needed.

## 🚀 Future Enhancements
- 📌 User authentication for admin roles.
- 📊 Dashboard with statistics on issued and available books.
- 📅 Due date tracking and fine calculation for issued books.

## 🤝 Contributing
Feel free to fork, contribute, and submit pull requests! 😊

## 📜 License
This project is **open-source** under the **MIT License**.
