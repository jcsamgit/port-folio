import React, { useEffect } from 'react'
import FondoTecno from './FondoTecno'
import TextParticles from './TextParticles'
import {Link} from "react-router-dom"
import MouseParticles from './MouseParticles';


export default function VisualModeBye() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const back= "<"
    const next= ">"
  return (
    <>
        <div className='fondo-container'>
            <FondoTecno/>
        </div>
        <div className='text-particles'>
            <TextParticles text="Bye Bye ;)"/>
        </div>
        <div style={{position:"absolute", top:"0", overflow:"hidden", width:"100%", zIndex:"0"}}>
            <MouseParticles/>
        </div>
        <div className='indice-container'>
            <div title='Volver'>
                <Link to="/" className='indice'> {back}</Link>
            </div>
            <div title='Siguiente'>
                <Link to="/modo-visual/proyectos" className='indice'> {next}</Link>
            </div>
        </div>
        
        {/* <div>
            <iframe src="https://jcsamgit.github.io/port-folio/" title='portfolio' height="80%" width="85%"></iframe>
        </div> */}
    </>
  )
}
