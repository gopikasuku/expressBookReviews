const express = require('express');
const books = require("./booksdb.js");

/**
 * Function to get books by title
 * @param {string} title - The title of the book
 * @returns {Promise<Array>} - Promise resolving to an array of books matching the title
 */
async function getBooksByAuthor(author) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const booksArray = Object.values(books);
      const matchingBooks = booksArray.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
      resolve(matchingBooks);
    }, 1000); // Simulate async operation with 1 second delay
  });
}

module.exports = getBooksByAuthor;
