
import React, { useEffect, useState, useRef } from 'react';
import Aptitudes from './Aptitudes';
import Educacion from './Educacion';
import Experiencia from './Experiencia';
import Logo from './Logo';
import Proyectos from './Proyectos';


export default function Destacado(): JSX.Element {
  const [mostrar, setMostrar] = useState<string>('Educación');
  const [ultimoBoton, setUltimoBoton] = useState<string>('Educación');
  const array: string[] = ['Educación', 'Aptitudes', 'Proyectos', 'Experiencia'];

  const enfoque = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Establece el foco en el div cuando se carga la página
    enfoque.current?.focus();
  }, []);

  const handleClick = (item: string): void => {
    setMostrar(item);
    setUltimoBoton(item);
  };

  return (
    <div className='destacado'>
      <div className='itemLogoContainer'>
        {array.map((item, index) => (
          <button
            key={item.toString()}
            id={item}
            className={`itemLogo${ultimoBoton === item ? ' activo' : ''}`}
            onClick={() => handleClick(item)}
            ref={index === 0 ? enfoque : null} // referencia solo el primer botón
          >
            <p className='parrafoLogo'>{item}</p>
            {/* bbb es la clase dada al svg del simbolo dinamico react */}
            <div className={`logoContainer ${mostrar === item ? 'bbb-activado' : ''}`}>
              <Logo color="#61DAFB" />
            </div>
          </button>
        ))}
      </div>

      <div className='contenedorConceptos'>
        {mostrar === 'Educación' ? <Educacion /> : false}
        {mostrar === 'Aptitudes' ? <Aptitudes /> : false}
        {mostrar === 'Proyectos' ? <Proyectos /> : false}
        {mostrar === 'Experiencia' ? <Experiencia /> : false}
      </div>
    </div>
  );
}
