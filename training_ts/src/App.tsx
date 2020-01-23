import React from 'react';
import './App.css';

import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Content></Content>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
