export let greeting = "Hello"
export function saySomething(text){
    console.log(text)
}
export class Person{
    sayHello(){
        return greeting + " " + saySomething("from a person")
    }
}

