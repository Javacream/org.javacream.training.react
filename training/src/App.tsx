import React from 'react';
import './App.css';
import HeaderComponent from './people/components/HeaderComponent'
import FooterComponent from './people/components/FooterComponent'
import ContentComponent from './people/components/ContentComponent'

function App() {
  return (
    <>
      <HeaderComponent />
      <hr />
      <ContentComponent />
      <hr />
      <FooterComponent />
    </>
  );
}

export default App;
