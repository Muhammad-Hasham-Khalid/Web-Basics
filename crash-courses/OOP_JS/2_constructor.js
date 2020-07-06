// Constructor (ES5)

function Book(title, author, year) {
    // console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;

    // this method will be stored in the object and each object will have its own getSummary function
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Instantiate an Object
const book1 = new Book('Book One', "John Doe", '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

// __proto__
// Calling properties and methods on objects
console.log(book1);
console.log(book1.getSummary());