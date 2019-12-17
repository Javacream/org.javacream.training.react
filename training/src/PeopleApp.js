import React from 'react';
import './PeopleApp.css';
import {PeopleAppFooter as Footer, PeopleContent as Content, PeopleAppHeader} from './people/PeopleMain'
import {user, peopleData} from './people/testdata/PeopleData'

export default function PeopleApp() {
  return (
    <>
    <PeopleAppHeader />
    <Content people={peopleData}/>
    <Footer user={user}/>
    </>
  );
}