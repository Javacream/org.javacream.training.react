import React, { PureComponent } from 'react';
import {Person} from '../model/People'
import PersonComponent from './PersonComponent'
export interface PeopleProp{
    people: Array<Person>;
    deletePersonHandler?: (id: number) => void
}

export default class PeopleComponent extends PureComponent<{people: Array<Person>}, {}>{

    constructor(readonly props:PeopleProp){
        super(props);
        //setTimeout(() => this.forceUpdate(), 4000) //forceUpdate: Lieber nicht verwenden
    }
    render(){
    const peoplePersonComponentsHtml = this.props.people.map((p:Person) => 
        <PersonComponent key={p.id} className = "list" person={p} detail={true} deletePersonHandler={this.props.deletePersonHandler}/>
    )
    const peopleHtmlRenderer = (
                <div className="content">
                    <h3>List of local people</h3>
                    <ul>{peoplePersonComponentsHtml}</ul>
                </div>
          )
        return peopleHtmlRenderer;
    }
   }
