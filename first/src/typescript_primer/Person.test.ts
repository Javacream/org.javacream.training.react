import {Person, PersonClass, f} from './Person'
import { isTSBooleanKeyword } from '@babel/types';
it('creates people', () => {
    let sawitzki:Person = new PersonClass("Sawitzki", "Rainer")
    let jsonSawitzki:Person = {lastname: "Sawitzki", firstname:"Klaus"}
    expect (f()).toBe("Hugo")
})