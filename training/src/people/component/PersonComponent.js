import React from 'react';
import {peopleData} from '../testdata/PeopleData'
function PersonComponent() {
    const p1 = peopleData.allPeople()[1]
    return (
        <p>{p1.info()}</p>
    );
}

export default PersonComponent