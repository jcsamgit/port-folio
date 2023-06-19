import React from 'react';

export default function Lateral(): JSX.Element {
    return (
        <>
            <div className='puesto'>
              <h2 className='ola'>Frontend React Js</h2>
              <h2 className='ola2'>Frontend React Js</h2>
            </div>
            <div className='contenidoLateral'>
                <div>
                    <h4>Perfil</h4>
                    <p>Creativo, responsable y autodidactico. Muy bueno con los algoritmos, las matemáticas y la tecnologia; destacando la inteligencia lógica y analítica.</p>
                </div>
                <div>
                    <h4>Contacto</h4>
                    <p>
                    Mensaje:<br></br>
                    <a href='https://www.linkedin.com/in/julio-gerald-casta%C3%B1eira-vargas-b85276238/' style={{color:"blue", margin:"0"}}> LinkedIn </a>
                    </p>
                    <p>Email:<br></br> <span className='email'>jc.cv.work@gmail.com</span></p>
                </div>
                <div>
                    <h4>Aficiones</h4>
                    <ul>
                        <li>Desarmar, reparar y armar aparatos</li>
                        <li>Juegos de estrategias como el ajedrez</li>
                        <li>Conducir auto</li>
                        <li>Crear macros con jitbit</li>
                    </ul>
                </div>
            </div>
        </>
      )
}
