export function classicFunction(){
    console.log("classic function")
}

export function classicFunction(p){
    console.log("classic function one param=" + p)
}
export function classicFunction(p1, p2){
    console.log(`classic function two params, p1= ${p1} p2= ${p2}`)
}


export let varFunction = function(){
    console.log("var function")

}

varFunction = function(p){
    //..
}

classicFunction() //classic function two params, p1= undefined p2= undefined
classicFunction("Hello")//classic function two params, p1= Hello p2= undefined
classicFunction("Hello", "World") //classic function two params, p1= Hello p2= World
varFunction()

let varFunctionWithArrow = () => {}

varFunctionWithArrow()
