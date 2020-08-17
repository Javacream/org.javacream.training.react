let message:string = 'Hello'
let digit:number = 42
//message = digit

function demo(p:string){
    console.log(p)
}


function demo2():string{
    return "Hello"
}

function demo3(){
    let state = true
    if (state){
    return "Hello"
    }
    else{
        return true
    }
}

let result = demo2()
let result2 = demo3()

//Functional

const demo2Functional = ():string => {
    return "Hello"
}

function hugo(p:number):boolean{
    return true;
}
function demoWithCallback(callbackFunction:(p:number)=>string){
    let result = callbackFunction(42)
    console.log(result)
}

demoWithCallback(demo2Functional)
demoWithCallback(demo2)
//demoWithCallback(hugo)
//demoWithCallback(42)

