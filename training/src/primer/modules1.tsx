let greeting = "Hello"
function saySomething(text:string){
    console.log(text)
}
class Person{
    sayHello(){
        return greeting + " " + saySomething("from a person")
    }
}

export {saySomething, greeting, Person}