import React from 'react';
import './PeopleApp.css';
import {PeopleAppFooter as Footer, PeopleContent as Content, PeopleAppHeader} from './people/PeopleMain'

export default function PeopleApp() {
  return (
    <>
    <PeopleAppHeader />
    <Content />
    <Footer />
    </>
  );
}