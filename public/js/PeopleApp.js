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

let peopleModel = new PeopleModel()//[]
peopleModel.add(p1)
peopleModel.add(p2)
peopleModel.add(p3)

peopleModel.add({
  lastname: "Mehlfeld",
  firstname: "Johann",
  personId: 42,
  info: function(){ return "i am mehlfeld"}
})

console.log("************** SORT LASTNAME**************")
peopleModel.people().sort((pa, pb) => {return pa.lastname.localeCompare(pb.lastname)} )
peopleModel.people().forEach((p) => console.log(p.info()))
console.log("************** SORT FIRSTNAME**************")
peopleModel.people().sort((pa, pb) => {return pa.firstname.localeCompare(pb.firstname)} )
peopleModel.people().forEach((p) => console.log(p.info()))

console.log("************** PEOPLE INFOS**************")
let peopleInfos = peopleModel.people().map((p) => p.info())
console.log(...peopleInfos)
