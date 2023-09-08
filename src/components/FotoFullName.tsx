import React from 'react';
import Ola from './Ola';
import foto from '../multimedia/perfil-fondo-borroso.png'

export default function FotoFullName(): JSX.Element {
  // full ancho para que las letras no hagan salto de linea
  let style= {width:"100%"}
  return (
    <div className='encabezado'>
        <figure className='contenedorFoto'>
            <img src={foto} alt='foto de perfil'></img>
        </figure>
        <div className='fullName' style={style}>
              <h1 >
                <span className='mobileName'>
              <Ola olaText='Julio Gerald'/> <br />
              <Ola olaText='Castañeira Vargas'/>
                </span>
                <span className='desktopName'>
              <Ola olaText='Julio Gerald Castañeira Vargas'/>
                </span>
              </h1>

        </div>
    
    </div>
  );
}
