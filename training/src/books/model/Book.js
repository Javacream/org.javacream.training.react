export class Book {
    constructor(isbn, title, price, available){
        this.isbn = isbn
        this.title = title
        this.price = price
        this.available = available
        //Optional: Read-Only
        Object.freeze(this)
    }

    unboundInfo(){
        return `Book: isbn=${this.isbn}, title=${this.title}, price=${this.price}, available=${this.available}`
    }

    info = () => `Book: isbn=${this.isbn}, title=${this.title}, price=${this.price}, available=${this.available}`
}