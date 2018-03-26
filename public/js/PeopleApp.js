let p1 = new Person(1, "Meier", "Avery")
let p2 = new Student(2, "Metzger", "Carol", "LMU")
let p3 = new Worker(3, "Mauser", "Joyce", "Integrata")

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
