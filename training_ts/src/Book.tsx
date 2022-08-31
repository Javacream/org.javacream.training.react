export default class Book {
    isbn :string
    title:string
    price:number
    available:boolean
    constructor(isbn:string, title:string, price:number, available:boolean){
        this.isbn = isbn
        this.title = title
        this.price = price
        this.available = available
        //Optional: Read-Only
        Object.freeze(this)
    }

    unboundInfo():string{
        return `Book: isbn=${this.isbn}, title=${this.title}, price=${this.price}, available=${this.available}`
    }

    info:()=>string = () => `Book: isbn=${this.isbn}, title=${this.title}, price=${this.price}, available=${this.available}`
}