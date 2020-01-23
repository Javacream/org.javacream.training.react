import React, { PureComponent } from 'react';
import {Person} from '../model/People'
import PersonComponent from './PersonComponent'
export interface PeopleProp{
    people: Array<Person>;
}

export default class PeopleComponent extends PureComponent<{people: Array<Person>}, {}>{

    constructor(readonly props:PeopleProp){
        super(props);
    }
    render(){
    const peoplePersonComponentsHtml = this.props.people.map((p:Person) => 
        <PersonComponent key={p.id} className = "list" person={p} detail={true} />
    )
    const peopleHtmlRenderer = (
                <div className="content">
                    <h3>List</h3>
                    <ul>{peoplePersonComponentsHtml}</ul>
                </div>
          )
        return peopleHtmlRenderer;
    }
   }
