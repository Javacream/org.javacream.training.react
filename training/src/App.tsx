import React from 'react';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Content from './component/Content'
const App: React.FC = () => {
  return (
    <>
      <Header />
      <hr />
      <Content></Content>
      <hr />
      <Footer></Footer>
    </>
  );
}

export default App;
