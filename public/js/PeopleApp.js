let p1 = new Person(1, "Meier", "Avery")
let p2 = new Student(2, "Metzger", "Joyce", "LMU")
let p3 = new Worker(3, "Mauser", "Carol", "Integrata")

dump()
p1.marry(p2)
p1.marry(p3)
dump()
p2.divorce()
p3.divorce()
dump()
p3.marry(p2)
dump()
function dump(){
  console.log(p1.info())
  console.log(p2.info())
  console.log(p3.info())
}

let people = []
people.push(p1, p2, p3)


console.log("************** SORT LASTNAME**************")
people.sort((pa, pb) => {return pa.lastname.localeCompare(pb.lastname)} )
people.forEach((p) => console.log(p.info()))
console.log("************** SORT FIRSTNAME**************")
people.sort((pa, pb) => {return pa.firstname.localeCompare(pb.firstname)} )
people.forEach((p) => console.log(p.info()))

console.log("************** PEOPLE INFOS**************")
let peopleInfos = people.map((p) => p.info())
console.log(...peopleInfos)
