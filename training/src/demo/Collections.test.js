describe('collections in ES', () => {
    it ('shows lists'), () => {
        let names = new Array()
        names.push("Hugo")
        names.push("Emil")
        names.push("Fritz")

        //Treffer selektieren: filter ((element) => return false|true)
        //Sortieren: sort ((element) => zahl < = > 0)
        //Transformation: map((element) => return element.length())
        //Gruppierung: reduce
        names.forEach( (element) => console.log(element))

    }
})