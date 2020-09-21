import React from 'react';
import './App.css';
import {HeaderComponent, FooterComponent, ContentComponent} from './people/components/PeopleModul'
export default function App() {
  return (
    <>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </>
  );
}

