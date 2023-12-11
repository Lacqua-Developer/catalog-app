import React from 'react';
import Catalog from './components/catalog'
import './App.css'
import HeaderBar from './components/Header';




const App: React.FC = () => {

  return (
    <>
      <HeaderBar />
      <Catalog />
    </>

  );
};

export default App;
