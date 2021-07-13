// 1 Задание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
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
        this.state = this._state;
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
    constructor(author) {
    super(author);
    this.author = author;
    this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(type) {
        super(type)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(type) {
        super(type)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(type) {
        super(type)
        this.type = "detective";
    }
}

// 2 Задание

class Library extends PrintEditionItem {
    constructor(name, books) {
        this.name = "";
        this.books = [];
    }
    addBook(book) {
        this.books = this.book;
    }
    findBookBy(type, value) {

    }
    // giveBookByName(bookName) {
    //     if (this.book === bookName) {
    //         return delete this.book;
    //     } else (this.book === bookName) {
    //         return this.book === null;
    //     }
    // } Здесь не совсем понял
}