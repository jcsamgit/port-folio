import React, { useEffect } from 'react';
import './App.css';

import Main from "./components/Main";
import Destacado from './components/Destacado';

function App(): JSX.Element {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <a href="#inicio" style={{ visibility: 'hidden' , position:"absolute"}} id="top">
  <span style={{ display: 'none' }}>Ir al inicio</span>
</a>

      <Main id="inicio" />
      <Destacado /> 
    </>
  );
}

export default App;
