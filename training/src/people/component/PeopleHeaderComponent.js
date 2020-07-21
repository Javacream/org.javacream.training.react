import React from 'react';
import PeopleProfileComponent from './content/PeopleProfileComponent'
function PeopleHeaderComponent () {
    return (
        <>
            <div className='header'>
            <h1 >P E O P L E</h1>
            <PeopleProfileComponent />
            </div>
        </>
    );
}

export default PeopleHeaderComponent
