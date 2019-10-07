import React from 'react';
import {peopleData} from '../testdata/PeopleData'
function PeopleComponent() {
    const peopleHtml = peopleData.allInfos().map( (info) => <p>{info}</p>)
    return (
        <div><ol>{peopleHtml}</ol></div>    
    );
}

export default PeopleComponent