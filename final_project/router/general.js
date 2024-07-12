const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

const getAllBooks = require('./getBooks');
const getBooksByTitle = require('./getBookByTitle');

const app = express();
async function getAllBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(books);
      }, 1000); // Simulate async operation with 1 second delay
    });
  }
// Route to get all books
app.get('/books', async (req, res) => {
  try {
    const books = await getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// Route to get books by title
app.get('/books/search', (req, res) => {
  const title = req.query.title;

  if (!title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }

  const matchingBooks = getBooksByTitle(title);

  if (matchingBooks.length === 0) {
    return res.status(404).json({ message: 'No books found with the given title' });
  }

  res.json(matchingBooks);
});



public_users.post("/", (req,res) => {
  //Write your code here
//   books[2].review({
//     "review":{1:"satisfying"}
//   })
  res.send("Review added successfully");
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn.split(":");
  res.send(books[isbn[1]].reviews);
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
