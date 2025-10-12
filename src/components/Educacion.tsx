import React from 'react'
import Ola from './Ola'
import Mescribir from './Mescribir'
import CertificadoViewer from './CertificadoViewer'



export default function Educacion(): JSX.Element {
// let dinamico = { display: props.activar };
  return (
        <div className='concepto educacion' >
            <h3>
                <Ola olaText='EDUCACION'/>
            </h3> <br />
            <h4 className='maquina'>AluraLatam + Oracle</h4>
            <h4 className='maquina'>
                <Mescribir text="
                Desarrollador Backend (octubre 2025 - actualidad)
                "/>
                {/* <CertificadoViewer archivos={["/documents/PROXIMAMENTE.pdf"]}/> */}
            </h4>
            <h4 className='maquina'>Soft Skills:</h4>
            <ul>
                <li className='maquina'>Desarrollo Personal (agosto - septiembre 2025) 
                    <CertificadoViewer 
                    archivos={
                        ['/documents/desarrollo-personal.pdf',
                        '/documents/git.pdf',
                        '/documents/foco.pdf',
                        '/documents/habitos.pdf',
                        '/documents/aprender.pdf'
                        ]} />

                </li>
            </ul>
            <h4 className='maquina'>Inteligencia artificial:</h4>
            <ul>
                <li className='maquina'> Ingenieria de prompt (agosto - septiembre 2025)
                    <CertificadoViewer archivos={["/documents/ing-prompt.pdf"]}/>
                </li>
                <li className='maquina'>Explorando el potencial de la inteligencia artificial generativa (agosto - septiembre 2025)
                    <CertificadoViewer archivos={["/documents/ia-generativa.pdf"]}/>
                </li>
                <li className='maquina'>Aprendizaje con inteligencia artificial (agosto - septiembre 2025)
                    <CertificadoViewer archivos={["/documents/ia-aprendizaje.pdf"]}/>
                </li>
            </ul>
            <hr />
            <br />
            <h4 className='maquina'>Coderhouse</h4>
            <h4 className='maquina' style={{display:"inline"}}>
                <Mescribir text="
                Desarrollador Frontend React (septiembre 2021):
                "/>
            </h4>
                <CertificadoViewer archivos={["/documents/frontend.png"]}/>
            <ul>
                <li className='maquina'>React Js (junio-septiembre)
                    <CertificadoViewer archivos={["/documents/react.png"]}/>
                </li>
                <li className='maquina'>JavaScript (mayo-junio)
                    <CertificadoViewer archivos={["/documents/js.png"]}/>
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Desarrollo Web (febrero-mayo)
                "/>
                    <CertificadoViewer archivos={["/documents/web.png"]}/>
                </li>
            </ul>
            <hr />
            <br />
            <h4 className='maquina'>Universidad Austral</h4>
            <ul>
                <h4 className='maquina'>
                Agosto 2020 - Diciembre 2020
                </h4>
                <li className='maquina'>
                <Mescribir text="
                    Manejo de base de datos con Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/RFW3A7Y93ULJ' target='_blank'rel="noopener noreferrer">ver mas</a>                    
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Programación orientada a objetos con Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/NWXYQJCGL8T4' target='_blank'rel="noopener noreferrer">ver mas</a>
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Estructuras de datos en Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/BQRUNHJWRGS6' target='_blank'rel="noopener noreferrer">ver mas</a>
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Introducción a la programación con Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/KYP7RHBNPC49' target='_blank'rel="noopener noreferrer">ver mas</a>         
                </li>
            </ul>
            <hr />
            <br />
            <h4 className='maquina'> Universidad Nacional de San Martin</h4>
            <ul>
            <Mescribir text="
                Febrero de 2012-agosto de 2014 (incompleto)
                "/>
                <li className='maquina'>Ingenieria Industrial</li>
            </ul>

        </div>
  )
}
