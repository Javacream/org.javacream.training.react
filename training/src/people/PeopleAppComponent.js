import React from 'react'
import './People.css'
import PeopleContentComponent from './content/PeopleContentComponent'
import PeopleHeaderComponent from './PeopleHeaderComponent'
import PeopleFooterComponent from './PeopleFooterComponent'
function PeopleAppComponent(){
    return (
        <>
            <PeopleHeaderComponent />
            <PeopleContentComponent />
            <PeopleFooterComponent />

        </>
    )
}

export default PeopleAppComponent