function variables(){
  let message = "Hello"
  console.log(message);
  message = 42
  console.log(message);
}

function demo(){
  console.log("two params, p1=" + arguments[0] + ", p2=" + arguments[1])
}

let demo2 = function(p1, p2){
  console.log("two params, p1=" + p1 + ", p2=" + p2)
}

let demo3 = (p1, p2) => {
  console.log("two params, p1=" + p1 + ", p2=" + p2)
}

let names = ["Anton", "Berndhardt", "Clara"]
let names2 = new Array()

let postalCodes = new Map()
let namesSet = new Set()

let person = {lastname: "Sawitzki", firstName: "Rainer", 
  sayHello: function (){
    return "Person:" + this.lastname
  }
}

class Person{
  constructor(lastname, firstname){
    this.lastname = lastname
    this.firstname = firstname
    }
    sayHello(){
      return "PersonClass:" + this.lastname
    }
}

test('testing class', () => {
  console.log("CLASS");
  let p = new Person("Sawitzki", "Rainer")
  console.log(p.sayHello())
  });

test('testing objects', () => {
  console.log("Objects");
  console.log(person.sayHello())
  });

test('testing list', () => {
  console.log("COLLECTIONS");
  names.filter((element) => element.length==5).map((element) => element[0]).forEach((element) => {
    console.log(element)
  });

});

test('testing variables', () => {
    console.log("VARS");
    variables();
  });

  test('testing function override', () => {
    console.log("OVERRIDE");
    demo();
    demo("Hello")
    demo("Hello", "World")
    demo2("Hello", "World")
    demo3("Hello", "World")
  });