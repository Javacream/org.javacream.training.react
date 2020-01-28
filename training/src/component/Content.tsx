import React from 'react';
import './Content.css'
import {peopleList} from '../ApplicationContext'
import PeopleListComponent from '../people/component/PeopleListComponent'
const Content = () => {
    return (
        <div className="content"><PeopleListComponent people={peopleList} /></div>
    )
}

export default Content