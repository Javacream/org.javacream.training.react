export default class Book {
    constructor(isbn, title, price, available){
        this.isbn = isbn
        this.title = title
        this.price = price
        this.available = available
    }

    info(){
        return `Book: isbn=${this.isbn}, title=${this.title}, price=${this.price}, availbale=${this.available}`
    }
}