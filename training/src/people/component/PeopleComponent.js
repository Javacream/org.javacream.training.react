import React from 'react';
import {peopleData} from '../testdata/PeopleData'
function PeopleComponent() {
    const peopleHtml = peopleData.allPeopleBy('m').map( (p) => <li>{p.info()}</li>)
    return (
        <div><ol>{peopleHtml}</ol></div>    
    );
}

export default PeopleComponent