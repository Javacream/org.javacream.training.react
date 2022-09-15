import Person from "./Person";

export default async function getDefaultProfile(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const profile = await response.json()
    const profileFullName = profile.name
    const splitted = profileFullName.split(" ")
    const person = new Person(splitted[0], splitted[1])
    return person

}