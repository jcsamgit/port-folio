import React, { useState } from 'react';
import contact from "../multimedia/contacto-icono.svg";
import linkedin from "../multimedia/linkedin.svg";
import mail from "../multimedia/mail.svg";

export default function Contacto() {
const [expandir, setExpandir] = useState(false);

const handleToggle = () => {
setExpandir(!expandir);
};

return (
<>
    <div className={`btn-flotante ${expandir ? 'expandido' : ''}`} onClick={handleToggle} title="Contactame">
    <img src={contact} alt="icono de contacto" />
    {expandir && (
        <>
        <div className="circulo arriba" title='via Linkedin'>
        <a href='https://www.linkedin.com/in/julio-gerald-casta%C3%B1eira-vargas-b85276238/'className='linkedin btnContact'>
            <img src={linkedin} alt="logo de linkedin" />
        </a>
        </div>
        <div className="circulo izquierda" title='via email'>
        <a href="mailto:jc.cv.work@gmail.com" className='email btnContact'>
            <img src={mail} alt="logo de gmail" />
        </a>
        </div>
        </>
    )}
    </div>
</>
);
}
