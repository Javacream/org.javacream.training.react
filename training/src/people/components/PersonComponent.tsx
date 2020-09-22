import React from 'react'
import { Person } from '../model/PeopleModel'

type PersonProps = {
    person?:Person, 
    detail:boolean,
    className:string
}
export default function PersonComponent(props:PersonProps){
    let personInfo:string
    const p = props.person
    if (p){
        if (props.detail){
            personInfo = `Person: id= ${p?.id}, lastname=${p?.lastname}, firstname=${p?.firstname}, gender=${p?.gender}, height=${p?.height}`
        }else{
            personInfo = `${p?.firstname} ${p?.lastname}`
        }
        return (
            <p className={props.className}>{personInfo}</p>
        )
    }else{
        return <p>no person info provided</p>
    }
}
