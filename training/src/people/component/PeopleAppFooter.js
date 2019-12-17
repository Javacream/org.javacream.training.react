import React from 'react';
import PersonComponent from './PersonComponent'
export default function PeopleAppFooter(props){
    const EGAL = 42
    return (
        <>
        <hr />
        <div className="footer">
            <PersonComponent person={props.user}/>
        </div>
        </>
    )
}
