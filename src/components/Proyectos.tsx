import React from 'react';
import Ola from './Ola';
import Mescribir from './Mescribir';

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
        <br />
        <ul>
          <li className='maquina'>
            <Mescribir text="
              Este port-folio (con React-Typescript)
                "/>
          </li>
          <li className='maquina'>
            <Mescribir text="
              Venta de autos (con React)
                "/>
            <a href='https://acaestatu0km.com'>ver mas</a>
          </li>
          <li className='maquina'>
            <Mescribir text="
            Tienda online (con React Js)
                "/>
            <a href='https://jcsamgit.github.io/bikes/'>ver mas</a>
          </li>
          <li className='maquina'>
            <Mescribir text="
            Simulador de plazo fijo (con HTML Y JS)
                "/>
            <a href='https://jcsamgit.github.io/Simulador-de-plazo-fijo/'>ver mas</a>
          </li>
          <li className='maquina'>
            <Mescribir text="
            Gym (con HTML y JS)
                "/>
            <a href='https://jcsamgit.github.io/gym/'>ver mas</a>
          </li>
          <li className='maquina'>
            <Mescribir text="
            Menu oriental (pagina estática con HTML)
                "/>
            <a href='https://jcsamgit.github.io/tsuki-food/'>ver mas</a>
          </li>
          {/* <li className='maquina'>
            <Mescribir text="
            Catálogo online (con HTML y bootstrap)
                "/>
            <a href='https://jcsamgit.github.io/Proyecto-bikes.html/'>ver mas</a>
          </li> */}
          <li className='maquina'>
            <Mescribir text="
            Tateti con Python
                "/>
            <a href='https://github.com/jcsamgit/simuladores/blob/main/TATETI.py'>ver mas</a>
          </li>
          <li className='maquina'>
            <Mescribir text="
            Simulador de dados con Python
                "/>
              <a href='https://github.com/jcsamgit/simuladores/blob/main/Simulador%20de%20dados.py'>ver mas</a>
          </li>
        </ul>
    </div>
  )
}
