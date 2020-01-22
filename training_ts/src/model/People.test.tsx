import '@testing-library/jest-dom/extend-expect';
import { PersonClass, PeopleModel } from "./People";

test('creating a person', () => {
    let p = new PersonClass(42, "Sawitzki", "Rainer", "m");
    expect(p.lastname).toBe("Sawitzki")
});
test('PeopleModel works', () => {
    let model = new PeopleModel();
    model.add(new PersonClass(40, "Sawitzki", "Rainer", "m"));
    model.add({id: 41, lastname:"Sawitzki", firstname:"Klaus", gender:"m"});
    model.add({id: 42, lastname:"Meier", firstname:"Hans", gender:"m"});
    model.add({id: 43, lastname:"Metzger", firstname:"Georg", gender:"m"});
    model.add({id: 44, lastname:"Meier", firstname:"Hanna", gender:"m"});
    expect(model.personBy("Sawitzki").length).toBe(2)
    expect(model.personBy("Metzger").length).toBe(1)
    expect(model.people().length).toBe(5)
    expect(model.personOf(40)!.firstname).toBe("Rainer")

});


test ("write info", () => {
    function inner(f){
        console.log(f())
    }
    function demo(){
            let p:PersonClass = new PersonClass(1, "Sawitzki", "Rainer", "m");
            //console.log(p.info())
            inner(p.info);
    }
    demo()
})