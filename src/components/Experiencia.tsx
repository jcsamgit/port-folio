import React from 'react'
import Ola from './Ola'


// interface ExperienciaProps {
//     activar: string;
//   }
  
  export default function Experiencia(): JSX.Element {
    // let dinamico = { display: props.activar };
  return (
    <>
      <div className='concepto experiencia' >
            <h3>
            <Ola olaText="EXPERIENCIA" />
            </h3>
            <br/>
            <br/>
            <h4 className='maquina'>Bootcamp Semillero en Quinto impacto (mayo/2023-actualidad)</h4>
            <br/>
            <h4 className='maquina'>Freelance (2022-actualidad)</h4>
            <br/>
            <h4 className='maquina'>Chofer de remis (2013-actualidad)</h4>
            <br/>
            <h4 className='maquina'>Profesor particular (2012-2020)</h4>
            <ul>
                <li className='maquina'>Matemáticas todos los niveles hasta cbc</li>
            </ul>
      </div>
    </>
  )
}
