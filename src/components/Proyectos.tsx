import React from 'react';
import Ola from './Ola';

// interface ProyectosProps {
//   activar: string;
// }

export default function Proyectos(): JSX.Element {
//   let dinamico = { display: props.activar };
  return (
    <div className='concepto proyectos' >
        <h3>
          <Ola olaText='PROYECTOS'/>
        </h3>
        <br />
        <ul>
          <li className='maquina'> Sitio web de venta de autos (con React)
            <a href='https://acaestatu0km.com'>ver mas</a>
          </li>
          <li className='maquina'>Tienda online (con React Js)
            <a href='https://jcsamgit.github.io/bikes/'>ver mas</a>
          </li>
          <li className='maquina'>Simulador de plazo fijo (con HTML Y JAVASCRIPT)
            <a href='https://jcsamgit.github.io/Simulador-de-plazo-fijo/'>ver mas</a>
          </li>
          <li className='maquina'>Gym (con HTML y JAVASCRIPT)
            <a href='https://jcsamgit.github.io/gym/'>ver mas</a>
          </li>
          <li className='maquina'>Menu oriental (pagina estatica con HTML)
            <a href='https://jcsamgit.github.io/tsuki-food/'>ver mas</a>
          </li>
          <li className='maquina'>Catologo online (con HTML y bootstrap)
            <a href='https://jcsamgit.github.io/Proyecto-bikes.html/'>ver mas</a>
          </li>
          <li className='maquina'>Tateti con Python
            <a href='https://github.com/jcsamgit/simuladores/blob/main/TATETI.py'>ver mas</a>
          </li>
          <li className='maquina'>Simulador de dados con Python
              <a href='https://github.com/jcsamgit/simuladores/blob/main/Simulador%20de%20dados.py'>ver mas</a>
          </li>
        </ul>
    </div>
  )
}
