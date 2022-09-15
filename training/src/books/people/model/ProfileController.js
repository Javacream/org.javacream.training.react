import Person from "./Person";

export default async function getDefaultProfile(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const profile = await response.json()
    const person = new Person(profile.name, profile.name)
    return person

}