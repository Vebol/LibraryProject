//constructor for the library

function Library (books) {
  this.books = books;
  this.printTitles = function() {
    this.books.forEach((book) => {  
       	console.log(book.title);
    });
   } 
   
  this.printAuthors = function() {
    this.books.forEach((book) => {
      if (book.authors !== undefined){
          console.log(book.authors.join('\n'));
        }
    });
  }

  this.printLowest = function() {
      this.books.forEach((book) => {
           console.log(book.pageCount);
        }); 
  }

  this.findGoodBooks = function() {
      this.books.forEach((book) => {
      if (book.averageRating >= 3) {
          console.log(book.title, book.averageRating);
          }  

       });
  }

}



		
