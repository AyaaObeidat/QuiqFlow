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

async function showAllBooks() {
    try {
      const books = await getAllBooks();
      if (books && books.length > 0) {
        let bookTitles = books.map(book => book.title)
                              .sort((a, b) => b.length - a.length);
        let cleanBookList = [...new Set(bookTitles)];
        console.log(`-- Book List :\n`);
        cleanBookList.forEach(title => {
          console.log(`-- ${title}`);
        });
      } else {
        console.log('No books found');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async function showAllInfoAboutSpecificBook(bookTitle) {
    try {
      const books = await getAllBooks();
      if(books && books.length > 0){
        let selectedBook = books.find(b => b.title === bookTitle);
        if(selectedBook){
          let authorName = selectedBook.author_name ?? " ";
          let publishYear = selectedBook.first_publish_year ?? "0000";
          console.log(`Title : ${selectedBook.title}\nAuthor Name : ${authorName}\nFirst Publish Year : ${publishYear}`)
        }
        else console.log('Book not found');
      }
      else  console.log('No books found');
    } catch (error) {
      console.log('Error:', error);
    }
  }