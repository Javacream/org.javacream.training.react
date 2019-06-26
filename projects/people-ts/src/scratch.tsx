import {PersonClass} from './model/People'

let aPerson:PersonClass = new PersonClass(9, "Eg", "Al")

demo(aPerson.info)
demo(aPerson.infoMethod)

function demo(callback: () => string){
    let result:string = callback();
    console.log(result);
}


