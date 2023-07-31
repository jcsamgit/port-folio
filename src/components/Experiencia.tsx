import React from 'react'
import Ola from './Ola'
import Mescribir from './Mescribir'


  
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
              -Frontend en Semillero de Quinto impacto (mayo/2023-actualidad)
                "/>
              </h4>
            <h4 >
            <Mescribir text="
            Trabajo en equipo (SCRUM), tareas de programación web
                "/>
              </h4>
            <h4 >
            <Mescribir text="
            Tecnologías usadas:
                "/>
              </h4>
            <h4 >
            <Mescribir text="
            HTML, CSS, JS, JAVA, SPRINT, MySQL, FORK, GITEA, NEXTCLOUD, FIGMA, TRELLO, MAVEN, VSC
                "/>
              </h4>
            <br/>
            <h4 className='maquina'>-Freelance (2022-actualidad)</h4>
            <br/>
            {/* <h4 className='maquina'>Chofer de remis (2013-actualidad)</h4> */}
            {/* <br/> */}
            <h4 className='maquina'>-Profesor particular (2012-2020)</h4>
            <ul>
                <li className='maquina'>Matemáticas todos los niveles hasta cbc</li>
            </ul>
      </div>
    </>
  )
}
