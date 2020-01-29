import {Person} from '../model/People'

export default class PeopleController{
    scratchPromise(){
        let resultPromise = fetch("http://localhost:8080/people/1")
        let jsonPromise = resultPromise.then((result) => {
            let json =  result.json()
            return json
        })
        jsonPromise.then((data) => {
            console.log(data)
        })
    }


    async findById(id: number):Promise<Person|undefined>{
        try{
            console.log(id)
            let response = await fetch("http://localhost:8080/people/" + id)
            let person = await response.json()
            return person

        }
        catch(error){
            console.log(error)
        }
    }

}