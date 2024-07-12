const express = require('express');
const books = require("./booksdb.js");

/**
 * Function to get all books
 * @returns {Promise<Object>} - Promise resolving to an object of all books
 */
async function getAllBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 1000); // Simulate async operation with 1 second delay
  });
}

module.exports = getAllBooks;
