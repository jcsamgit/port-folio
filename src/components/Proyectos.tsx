import React from 'react';

// interface ProyectosProps {
//   activar: string;
// }

export default function Proyectos(): JSX.Element {
//   let dinamico = { display: props.activar };
  return (
    <div className='concepto proyectos' >
        <h3>PROYECTOS</h3>
        <ul>
          <li>Tienda online (con React Js)
            <a href='https://jcsamgit.github.io/bikes/'>Ver mas...</a>
            </li>
          <li>Simulador de plazo fijo (con HTML Y JAVASCRIPT)
            <a href='https://jcsamgit.github.io/Simulador-de-plazo-fijo/'>Ver mas...</a>
          </li>
          <li>Gym (con HTML y JAVASCRIPT)
            <a href='https://jcsamgit.github.io/gym/'>Ver mas...</a>
          </li>
          <li>Menu oriental (pagina estatica con HTML)
            <a href='https://jcsamgit.github.io/tsuki-food/'>Ver mas...</a>
          </li>
          <li>Catologo online (con HTML y bootstrap)
            <a href='https://jcsamgit.github.io/Proyecto-bikes.html/'>Ver mas...</a>
          </li>
          <li>Tateti con Python
            <a href='https://github.com/jcsamgit/simuladores/blob/main/TATETI.py'>Ver mas...</a>
          </li>
          <li>Simulador de dados con Python
              <a href='https://github.com/jcsamgit/simuladores/blob/main/Simulador%20de%20dados.py'>Ver mas...</a>
          </li>
        </ul>
    </div>
  )
}
