import React from 'react';
import PeopleListComponent from './PeopleListComponent'
import PersonInputFormComponent from './PersonInputComponent'
export default function ContentComponent() {
    return  (
        <div id="content">
            <PeopleListComponent />
            <hr />
            <PersonInputFormComponent />
        </div>
      )

}

