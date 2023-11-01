import React, { useEffect } from 'react';
import Main from './Main'
import Destacado from './Destacado'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
        <a href="#inicio" style={{ visibility: 'hidden' , position:"absolute"}} id="top">
            <span style={{ display: 'none' }}>Ir al inicio</span>
        </a>
        <Main id="inico"/>
        <Destacado/>
    </div>
  )
}
