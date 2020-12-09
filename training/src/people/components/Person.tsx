import React from 'react'
import { Person } from '../model/people'
import { peopleModel } from '../model/peopleData'

type PersonComponentProp = {
    person: Person,
    detail?: boolean,
    cssStyle?: string
}
export default function PersonComponent(props:PersonComponentProp) {
    const handleDelete = (id:number) => {
        console.log(`deleting person ${id}`)
        peopleModel.deleteById(id) 
    }
    let personString:string
    const person = props.person
    if (props.detail){
        personString = `id: ${person.id}, lastname: ${person.lastname}, firstname: ${person.firstname}, gender: ${person.gender}, height: ${person.height}`
        return (
            <><p className={props.cssStyle}>{personString}<button onClick={() => handleDelete(person.id)}>del</button></p></>
        )
        }
    else{
        personString = `${person.firstname} ${person.lastname}`
        return (
            <p className={props.cssStyle}>{personString}</p>
        )
        }
}