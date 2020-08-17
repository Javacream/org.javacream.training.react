//import { saySomething, greeting } from "./modules2";
//
import saySomething, {greeting } from "./modules3";

test('trivial', () => {
    expect(true).toBeTruthy();
});


test('saySomething works', () => {
    saySomething(greeting)
    expect(true).toBeTruthy();
});