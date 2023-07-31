import React from 'react';
import Ola from './Ola';

export default function Lateral(): JSX.Element {
    return (
        <>

            <div className='puesto'>
                <Ola olaText={"Frontend React"}/>
            </div>
            <div className='contenidoLateral'>
                <div>
                    <h4>Perfil</h4>
                    <p>Creativo, responsable y autodidactico. Muy bueno con los algoritmos, las matemáticas y la tecnologia; destacando la inteligencia lógica y analítica.</p>
                </div>

                <div>
                    <h4>Aficiones</h4> <br />
                    <ul>
                        <li>Desarmar, reparar y armar aparatos</li>
                        <li>Juegos de estrategias como el ajedrez</li>
                        <li>Conducir auto</li>
                        <li>Crear macros con jitbit</li>
                    </ul>
                </div>
                <div>
                    <br />
                    <h4>Contacto</h4>

                    <p>
                    <a href='https://www.linkedin.com/in/julio-gerald-casta%C3%B1eira-vargas-b85276238/'className='linkedin btnContact'> LinkedIn </a>
                    </p>

                    <p>

                    <a href="mailto:jc.cv.work@gmail.com" className='email btnContact'>Email</a>
                    </p>
                </div>
            </div>
        </>
      )
}
