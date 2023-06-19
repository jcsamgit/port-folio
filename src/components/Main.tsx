import React from 'react';
import '../CSS/main.css';
import Destacado from './Destacado';
import FotoFullName from './FotoFullName';
import Lateral from './Lateral';
import Logo from './Logo';

export default function Main(): JSX.Element {
  return (
    <div className='main' id='main'>

      <div className='marco'>
        <FotoFullName />
        <Lateral />
        
      </div>
      <div className='mainLogoContainer'>
        <div className='mainLogo'>
          {/* <Logo color:string={"yellow"} /> */}
          <Logo color="rgb(255, 217, 0)" />

        </div>
      </div>
      
      <Destacado />

      <div className='decorativo'></div>
    </div>
  );
}
