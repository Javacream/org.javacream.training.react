import '@testing-library/jest-dom/extend-expect';
import { PersonClass, PeopleModel } from "./People";

test('creating a person', () => {
    let p = new PersonClass(42, "Sawitzki", "Rainer", "m");
    expect(p.lastname).toBe("Sawitzki")
});
test('PeopleModel works', () => {
    let model = new PeopleModel();
    model.add("Sawitzki", "Rainer");
    model.add("Sawitzki", "Klaus");
    model.add("Meier", "Hans");
    model.add("Metzger", "Georg");
    model.add("Meier", "Hanna");
    expect(model.findByLastname("Sawitzki").length).toBe(2)
    expect(model.findByLastname("Metzger").length).toBe(1)
    expect(model.people().length).toBe(5)
//    expect(model.findById(40)!.firstname).toBe("Rainer")

});

let func =  () => {
    let printOut = (f: () => string) => {
        console.log("in printout: " + f())
    }    
    let p = new PersonClass(40, "Sawitzki", "Rainer", "m")
    printOut(p.info)
    //console.log("in func: " + p.info())

}
test ('demo', func)

