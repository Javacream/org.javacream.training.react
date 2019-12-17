import React from 'react';
import PersonComponent from './PersonComponent'
export default function PeopleAppFooter(props){
    return (
        <>
        <hr />
        <div className="footer">
            <PersonComponent person={props.user}/>
        </div>
        </>
    )
}
