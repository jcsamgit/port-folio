import React from 'react';

export default function FotoFullName(): JSX.Element {
  return (
    <div className='marco2'>
        <div className='contenedorFoto'>
            <img src='https://github.com/jcsamgit/presentacion/blob/master/src/multimedia/perfil.jpg?raw=true' alt='foto de perfil'></img>
        </div>
        <div className='fullName'>
            <h1>
              Julio Gerald <br />
              Castañeira Vargas
            </h1>
            <div className='puesto'>
              <h2 className='ola'>Frontend React Js</h2>
              <h2 className='ola2'>Frontend React Js</h2>
            </div>
        </div>
    
    </div>
  );
}
