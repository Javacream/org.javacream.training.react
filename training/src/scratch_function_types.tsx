import { callbackify } from "util"

//Typescript type: (n1:number, n2:number) => void

function sum(n1:number, n2:number){
    console.log(n1 + n2)
}


// (n1:number, n2:number) => void
function sumWithReturn(n1:number, n2:number){
    return n1 + n2
}

const sumWithReturnArrow:(n1:number, n2:number) => number  = (n1:number, n2:number) => {
    return n1 + n2
}

const somethingWithCallback = (p1:string, p2:(x:string) => number) => {
    let result = p2(p1)
}



let callback:(p:string) => number  = (p:string) =>{
    return p.length
}

let callback2:(p:string) => string  = (p:string) =>{
    return p


//somethingWithCallback("Hugo", "Egal")
somethingWithCallback("Hugo", callback)
//somethingWithCallback("Hugo", callback2)
