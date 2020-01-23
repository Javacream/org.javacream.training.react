import React from 'react';
import {people} from '../ApplicationContent'
import PeopleListComponent from '../people/component/PeopleListComponent'
import './Content.css'

const Content = () => {
    return <PeopleListComponent people={people}></PeopleListComponent>;
}

export default Content; 