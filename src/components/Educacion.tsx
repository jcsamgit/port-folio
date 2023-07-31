import React from 'react'
import Ola from './Ola'
import Mescribir from './Mescribir'



export default function Educacion(): JSX.Element {
// let dinamico = { display: props.activar };
  return (
        <div className='concepto educacion' >
            <h3>
                <Ola olaText='EDUCACION'/>
            </h3> <br />
            <h4 className='maquina'>Coderhouse</h4>
            <h4 className='maquina'>
                <Mescribir text="
                Desarrollador Frontend React (septiembre 2021):
                "/>
                <a href='https://www.coderhouse.com/certificados/6179c8375e3d990020befc88'>ver mas</a>
            </h4>
            <ul>
                <li className='maquina'>React Js (junio-septiembre)
                    <a href='https://www.coderhouse.com/certificados/6158706be59b1d004313b15e'>ver mas</a>
                </li>
                <li className='maquina'>JavaScript (mayo-junio)
                    <a href='https://www.coderhouse.com/certificados/60e7518c94b0370012e33542'>ver mas</a>
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Desarrollo Web (febrero-mayo)
                "/>
                    <a href='https://www.coderhouse.com/certificados/60c7bc2318312b04bd2042dd'>ver mas</a>
                </li>
            </ul>

            <h4 className='maquina'>Universidad Austral</h4>
            <ul>
                <h4 className='maquina'>
                Agosto 2020 - Diciembre 2020
                </h4>
                <li className='maquina'>
                <Mescribir text="
                    Manejo de base de datos con Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/RFW3A7Y93ULJ'>ver mas</a>                    
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Programación orientada a objetos con Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/NWXYQJCGL8T4'>ver mas</a>
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Estructuras de datos en Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/BQRUNHJWRGS6'>ver mas</a>
                </li>
                <li className='maquina'>
                <Mescribir text="
                    Introducción a la programación con Python
                "/>
                    <a href='https://www.coursera.org/account/accomplishments/certificate/KYP7RHBNPC49'>ver mas</a>         
                </li>
            </ul>
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
