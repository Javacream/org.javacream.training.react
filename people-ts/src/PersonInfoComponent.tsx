import React from 'react';
import {Person} from './model/People';

export interface PersonInfoProp{
    person_info: string;
}
export let PersonInfoComponent = (props: PersonInfoProp) => {
        return (
            <div>
              <p>Person: {props.person_info}</p>
              </div>
        )
}


