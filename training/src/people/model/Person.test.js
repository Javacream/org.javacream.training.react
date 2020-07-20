import {Person} from  './Person'
/*
function testSequence(){
    const expected_lastname = "Sawitzki"
    let p1 = new Person(expected_lastname, "Rainer", 183)
    expect(p1.lastname).toBe(expected_lastname);

}*/

/*let testSequence =  function(){
    const expected_lastname = "Sawitzki"
    let p1 = new Person(expected_lastname, "Rainer", 183)
    expect(p1.lastname).toBe(expected_lastname);
}
*/

/*
let testSequence =  () => {
    const expected_lastname = "Sawitzki"
    let p1 = new Person(expected_lastname, "Rainer", 183)
    expect(p1.lastname).toBe(expected_lastname);
}

*/
test('create person and check lastname', () => {
    const expected_lastname = "Sawitzki"
    let p1 = new Person(expected_lastname, "Rainer", 183)
    expect(p1.lastname).toBe(expected_lastname);
})