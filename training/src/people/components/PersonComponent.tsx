import React from 'react'
import { Person } from '../model/People'

type PersonComponentPropType = {
    person:Person
    detail?:boolean
    cssStyle?:string
}
export default function PersonComponent(props:PersonComponentPropType){
    const person = props.person
    if (props.detail){
    return(
        <p>{`Person: id=${person.id}, lastname=${person.lastname}, firstname=${person.firstname}, gender=${person.gender}, height=${person.height}`}</p>
        )
    }
    else{
        return(
            <p className={props.cssStyle}>{person.firstname + " " + person.lastname}</p>
            )
    
    }
}