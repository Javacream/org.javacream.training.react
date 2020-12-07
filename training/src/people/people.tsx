export let appTitle = "P E O P L E"
let demo = [1, 2]
//classic function
export function doSomething(){
    return "OK"
}

//Arrow-Syntax
export let doSomethingArrow = () => {
    return "OK"
}
let funcWithParam: (x:boolean)=> string|number = (p:boolean): string | number=> {
    if(p){
        return "OK"
    }else{
        return 42
    }
}

//appTitle = 42


let result = funcWithParam(true)

function demoWithCallback(callBackFunction: (x:string) => boolean){
    return callBackFunction("Hugo")
}


let r = demoWithCallback( (p:string) => {
    return true
})
/*
let r = demoWithCallback( (p:number) => {
    return true
})
*/
