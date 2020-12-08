import React from 'react'
import { Person } from '../model/people'

type PersonComponentProp = {
    person: Person,
    detail?: boolean,
    cssStyle?: string
}
export default function PersonComponent(props:PersonComponentProp) {
    let personString:string
    const person = props.person
    if (props.detail){
        personString = `id: ${person.id}, lastname: ${person.lastname}, firstname: ${person.firstname}, gender: ${person.gender}, height: ${person.height}`
    }
    else{
        personString = `${person.firstname} ${person.lastname}`
    }
    return (
        <p className={props.cssStyle}>{personString}</p>
    )
}