import React from 'react'
import Ola from './Ola'
import Mescribir from './Mescribir'
import CertificadoViewer from './CertificadoViewer'

  
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
                  Experiencia en PR y resolución de conflictos al fusionar ramas en el main
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
                  HTML, CSS, JS, JAVA, VITE.JS, MySQL, FORK, GITEA, NEXTCLOUD, FIGMA, TRELLO, MAVEN, VSC
                "/>
              </li>

              <CertificadoViewer archivos={["/documents/quinto.png", "/documents/quinto2.png"]}/>
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
      </div>
    </>
  )
}
