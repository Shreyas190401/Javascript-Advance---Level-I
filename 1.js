let author = {
    init: function(name, nationality) {
        this.name = name;
        this.nationality = nationality;
        return this;
    },
    getDetails: function() {
        return `${this.name} (${this.nationality})`;
    }
};

let book = {
    init: function(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        return this;
    },
    getDetails: function() {
        return `${this.title} - ${this.genre} by ${this.author.getDetails()}`;
    }
};

let author1 = Object.create(author).init("J.K. Rowling", "British");
let author2 = Object.create(author).init("George R.R. Martin", "American");

let book1 = Object.create(book).init("Harry Potter and the Sorcerer's Stone", "Fantasy", author1);
let book2 = Object.create(book).init("A Game of Thrones", "Fantasy", author2);

console.log(book1.getDetails()); 
console.log(book2.getDetails());
