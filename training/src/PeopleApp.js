import React from 'react';
import './PeopleApp.css';
import PeopleAppHeader from './people/PeopleAppHeader'
import PeopleAppFooter from './people/PeopleAppFooter'
import PeopleContent from './people/PeopleContent'
function PeopleApp() {
  return (
    <>
    <PeopleAppHeader />
    <PeopleContent />
    <PeopleAppFooter />
    </>
  );
}

export default PeopleApp;
