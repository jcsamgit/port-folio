import React from 'react';
import Ola from './Ola';
import Mescribir from './Mescribir';

// interface AptitudesProps {
//   activar: string;
// }

export default function Aptitudes(): JSX.Element {
//   let dinamico = { display: props.activar };
  return (
    <div className='concepto aptitudes'>
        <h3 className='titulo'>
          <Ola olaText='APTITUDES'></Ola>
        </h3> <br /> <br />
        <li className='maquina'>
          <Mescribir text="
            Ingles: escrito (avanzado) y oral (intermedio)
                  "/>
          </li>
        <li className='maquina'>Data Entry </li>
        <li className='maquina'>Manejos de macros</li>
        <li className='maquina'>Word, Excel, Power Point </li>
        <li className='maquina'>C++ </li>
        <li className='maquina'>Python </li>
        <li className='maquina'>SQLite, MySQL</li>
        <li className='maquina'>Visual Studio Code</li>
        <li className='maquina'>GIT, GitHub y Gitea </li>
        <li className='maquina'>HTML, CSS, SASS, SEO </li>
        <li className='maquina'>Google search console </li>
        <li className='maquina'>Manejo de hosting y dominios </li>
        <li className='maquina'>Firebase </li>
        <li className='maquina'>JavaScript, JQuery </li>
        <li className='maquina'>Bootstrap y material ui </li>
        <li className='maquina'>Fork</li>
        <li className='maquina'>Typescript</li>
        <li className='maquina'>SCRUM</li>
        <li className='maquina'>Trello</li>
        <li className='maquina'>Manejo de AI</li>
        <li className='maquina'>React Js, React Ts, manejos de librerias y paquetes (npm)</li>
    </div>
  );
}
