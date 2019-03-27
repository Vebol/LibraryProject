// constructor for the book
function Book(authors, title, pageCount, averageRating){
  this.authors = authors;
  this.title = title;
  this.pageCount = pageCount;
  this.averageRating = averageRating;
  this.isPopular = () => {
    if (this.averageRating >= 3) {
      return true;
    }
    return false;
    // return this.averageRating >= 3
  };

  this.numberOfAuthors = function () {
      if (this.authors) {
        return this.authors.length;
      } else {
        return 0;
      }
      return this.authors ? this.authors.length : 0;

  };
  this.getShortTitle = () => {
    	 let str = title;
       let matches = str.match(/\b(\w)/g);
       let acronym = matches.join('');
    return acronym;
  }
}

 