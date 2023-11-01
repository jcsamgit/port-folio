import React, { useState } from 'react'
import FondoTecno from './FondoTecno'
import "../CSS/iframes-proyect.css"
import {Link} from "react-router-dom"
// import StarsAnimation from './StarsAnimation'
// import MouseParticles from './MouseParticles'
const urls=[
    "https://jcsamgit.github.io/gym/",
    "https://acaestatu0km.com/",
    "https://jcsamgit.github.io/bikes/",
    "https://jcsamgit.github.io/tsuki-food/",
    "https://jcsamgit.github.io/Simulador-de-plazo-fijo/",
    "https://jcsamgit.github.io/port-folio/"
]
export default function ProyectosIframes() {
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
    const back="<"

    const changeUrl = (index:number) => {
      setCurrentUrlIndex(index);
    };

  return (
    <>
        <div className='fondo-container'>
            <FondoTecno/>
        </div>
        {/* <div style={{position:"absolute", top:"0", width:"100%"}}>
            <StarsAnimation/>
        </div> */}
        <div className='indice-container'>
            <div title='Volver'>
                <Link to="/modo-visual-bye" className='indice'> {back}</Link>
            </div>
        </div>
        <div className='iframe-container'>
            <header className='encabezado'>
                {/* <h1>Titulo</h1> */}
                <div className='iframes-container'>
                    <button onClick={()=> changeUrl(0)} id={currentUrlIndex===0? "active": ""}>1</button>
                    <button onClick={()=> changeUrl(1)} id={currentUrlIndex===1? "active": ""}>2</button>
                    <button onClick={()=> changeUrl(2)} id={currentUrlIndex===2? "active": ""}>3</button>
                    <button onClick={()=> changeUrl(3)} id={currentUrlIndex===3? "active": ""}>4</button>
                    <button onClick={()=> changeUrl(4)} id={currentUrlIndex===4? "active": ""}>5</button>
                    <button onClick={()=> changeUrl(5)} id={currentUrlIndex===5? "active": ""}>6</button>
                    {/* <button onClick={()=> changeUrl(6)} id={currentUrlIndex===6? "active": ""}>7</button> */}
                    {/* <button onClick={()=> changeUrl(7)} id={currentUrlIndex===7? "active": ""}>8</button> */}
                </div>
            </header>
            <iframe src={urls[currentUrlIndex]} title='portfolio'></iframe>
        </div>
    
    </>
  )
}
