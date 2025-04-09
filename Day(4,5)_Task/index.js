const prompt = require('prompt-sync')();

async function getAllBooks() {
  try {
    const response = await fetch('https://openlibrary.org/search.json?q=harry+potter');
    if (response) {
      const books = await response.json();
      const booksArray = books.docs;
      return booksArray;
    } else {
      console.log('Error: Failed to fetch data');
      return null;
    }
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}