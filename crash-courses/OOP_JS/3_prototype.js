// Constructor 

function Book(title, author, year) {
    // console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
// this will make method once and can use that for every object (method will be stored in the prototype)
Book.prototype.getSummary = () => {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = () => {
    const years = new Date().getFullYear() - this.year;

    return `${this.title} is ${years} years old.`;
};

// Revise / Change year
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
};

// Instantiate an Object
const book1 = new Book('Book One', "John Doe", '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

// __proto__
// Calling properties and methods on objects
console.log(book1);
console.log(book1.getSummary());
console.log(book2.getAge());

book2.revise('2019');
console.log(book2);