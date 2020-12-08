import React from 'react'
import { Person } from '../model/people'

type PersonComponentProp = {
    person: Person
}
export default function PersonComponent(props:PersonComponentProp) {
    return (
<p className="right">{props.person.firstname} {props.person.lastname}</p>
)
    }