import React from 'react';
import Ola from './Ola';

export default function FotoFullName(): JSX.Element {
  // full ancho para que las letras no hagan salto de linea
  let style= {width:"100%"}
  return (
    <div className='encabezado'>
        <figure className='contenedorFoto'>
            <img src='https://github.com/jcsamgit/presentacion/blob/master/src/multimedia/perfil.jpg?raw=true' alt='foto de perfil'></img>
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
