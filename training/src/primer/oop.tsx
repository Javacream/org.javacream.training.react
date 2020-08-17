
export class PersonNotLikeTypescript implements Person{
    lastname:string
	firstname:string
	gender:string
	height:number

    constructor(lastname:string, firstname: string, gender:string, height:number){
        this.lastname = lastname
        this.firstname = firstname
        this.gender = gender
        this.height = height
    }
}

let p = new PersonNotLikeTypescript("Sawitzki", "Rainer", "m", 183)
p.lastname = "Meier"
p.firstname = "Hugo"

export class PersonAlsoNotTypescriptLike implements Person{
    constructor(readonly lastname:string, public firstname: string, public gender:string, public height:number){
    }
}

let p2 = new PersonAlsoNotTypescriptLike("Sawitzki", "Rainer", "m", 183)
//p2.lastname = "Meier"
p2.firstname = "Hugo"


interface Person{
	lastname:string
	firstname:string
	gender:string
	height:number
}

let p3:Person = {
    lastname: "Sawitzki",
    firstname: "Rainer",
    gender:"m",
    height: 183
}

console.log(p3)



