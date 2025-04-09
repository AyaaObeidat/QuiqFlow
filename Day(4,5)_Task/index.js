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

  async function filterBooksByAuthorName(authorName){
    try {
      const books = await getAllBooks();
      if(books && books.length > 0)
      {
        let authorNameBooks = books.filter(book =>
          book.author_name && book.author_name.includes(authorName)
        ).map(book => book.title);
  
        if(authorNameBooks.length>0){
          authorNameBooks.forEach(book => {
            console.log(`-- ${book}`);
           });
        }
        else console.log('No books found for this author');
      }
     else console.log('No books found');
    } catch (error) {
      console.log('Error',error);
    }
  }

  async function filterBooksByPublishedYear(publishYear){
    try {
      const books = await getAllBooks();
      if(books && books.length>0)
      {
         let publishYearBooks = books.filter(book => book.first_publish_year === publishYear)
                                     .map(book => book.title);
         if(publishYearBooks.length>0) {
          publishYearBooks.forEach(book => {
          console.log(`-- ${book}`);
          });
         }
         else console.log('No books found for this year');
      }
      else console.log('No books found');
    } catch (error) {
      console.log('Error',error);
    }
  }


  async function main(){
  
    console.log(`\n-- Book Library -- \n`);
    await showAllBooks();
    console.log(`-----------------------------------------\n`);
  
    let userAnswer = prompt('Do you want to search for a specific book? If yes, enter the book name. If no, enter "no": ');
    if(userAnswer.toLocaleLowerCase() !== 'no') await showAllInfoAboutSpecificBook(userAnswer);
    console.log(`-----------------------------------------\n`);
    
    let numberUserAnswer =parseInt(prompt('You can filter books by:\n1. Author Name\n2. Published Year\nPlease enter 1 or 2: '));
    if (numberUserAnswer === 1) {
      let choice = prompt('Please enter the author name: ');
      await filterBooksByAuthorName(choice);
    } else if (numberUserAnswer === 2) {
      let choice =parseInt(prompt('Please enter the published year: '));
      await filterBooksByPublishedYear(choice);
    } else {
      console.log('Wrong choice');
    }
  }
  main();