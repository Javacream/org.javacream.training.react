import {message, demo, Person} from './ecmascript'

it('test name', () => {
    let result1 = demo()
    let result2 = demo("Hello")
    let result3 = demo("Hello", "World")
    expect(result1).toBe("two")
    expect(result2).toBe("two")
    expect(result3).toBe("two")

  });
  it('people', () => {
    let p1 = new Person("Sawitzki", "Rainer")
    expect(p1.sayHello()).toBe("Hello, my name is Rainer Sawitzki")

    logInformation(p1.sayHello)

    p1.height = 183
    console.log(p1.height)
});

function logInformation(infoFn){
    console.log(infoFn())
}


  