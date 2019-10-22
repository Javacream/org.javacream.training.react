import React from 'react';
import ReactDom from 'react';
import {PersonClass} from './model/People'

it('prints person info', () => {
    let aPerson:PersonClass = new PersonClass(9, "Eg", "Al")

    demo(aPerson.info)
    function demo(callback: () => string){
        let result:string = callback();
        console.log(result);
    }
})

it('fails', () => {
    let aPerson:PersonClass = new PersonClass(9, "Eg", "Al")

    function demo(callback: () => string){
        let result:string = callback();
        console.log(result);
    }

    expect(function(){demo(aPerson.infoMethod)}).toThrow()

})
