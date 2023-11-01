import React from 'react'
import Ola from './Ola'
import Mescribir from './Mescribir'
import FondoTecno from './FondoTecno'
import TextParticles from './TextParticles'

import Certificado from './Certificado'

  
  export default function Experiencia(): JSX.Element {
  return (
    <>
      <div className='concepto experiencia' >
            <h3>
            <Ola olaText="EXPERIENCIA" />
            </h3>
            <br/>
            <br/>
            <h4 >
              <Mescribir text="
                -Frontend en Semillero Latam de Quinto impacto (mayo/2023-actualidad)
              "/>
            </h4>
            <ul>
              <li >
                <Mescribir text="
                  Trabajo en equipo (SCRUM), tareas de programación web
                "/>
              </li>
              <li >
                <Mescribir text="
                  Referencia comprobable
                "/>
              </li>
              <h4 >
                <Mescribir text="
                  Tecnologías usadas:
                "/>
              </h4>
              <li >
                <Mescribir text="
                  HTML, CSS, JS, JAVA, SPRINT, MySQL, FORK, GITEA, NEXTCLOUD, FIGMA, TRELLO, MAVEN, VSC
                "/>
              </li>

              <Certificado/>
            </ul>
            <br/>
            <h4 className='maquina'>-Freelance (2022-actualidad)</h4>
            <br/>
            {/* <h4 className='maquina'>Chofer de remis (2013-actualidad)</h4> */}
            {/* <br/> */}
            <h4 className='maquina'>-Profesor particular (2012-2020)</h4>
            <ul>
                <li className='maquina'>Matemáticas todos los niveles hasta cbc</li>
            </ul>
            {/* <iframe src='/borrar.html' title='prueba'></iframe> */}
            {/* <FondoTecno/> */}
            {/* <TextParticles text={"julio"} /> */}
            {/* <TextParticles text={"julio"} /> */}
            {/* <Link to="/certificado"> IR AL CERTIFICADO</Link> */}
      </div>
    </>
  )
}
