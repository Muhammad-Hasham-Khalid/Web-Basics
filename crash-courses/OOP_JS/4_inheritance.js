// Inheritance with prototypes

//Constructor
function Book(title, author, year) {
    // console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;
};

// getSummary
Book.prototype.getSummary = () => {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', "John Doe", '2018', 'Mar');

console.log(mag1);
console.log(mag1.getSummary());