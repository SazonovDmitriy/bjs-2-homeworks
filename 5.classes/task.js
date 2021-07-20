// 1 Задание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        this.author = "";
    }
    set state(stateUp) {
        stateUp *= 1.5;
        if (stateUp < 0) {
            this._state = 0;
        } else if (stateUp > 100) {
            this._state = 100;
        } else {
            this._state = stateUp;
        }
    }
    get state() {
        return this._state;
    }
    fix() {
        return this._state;
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author)
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author)
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author)
        this.author = author;
        this.type = "detective";
    }
}

// 2 Задание

class Library extends PrintEditionItem {
    constructor(books, name) {
        super(books, name)
        name = this.name;
        this.books = [];
    }
    addBook(book) {
        if (this.state > 30) {
        this.books.push(book);
        };
    }
    findBookBy(type, value) {
        let findBook = this.books.find((item) => item[type] === value);
        if (findBook) {
            return findBook;
        } else {
            return null;
        }
    }
    giveBookByName(bookName) {
        let findBookName = this.findBookBy('name', bookName);
        if (findBookName != null) {
            const indexBook = this.books.indexOf(findBookName);
            this.books.splice(indexBook, 1);
        }
        return findBookName;
    }
}