import React from 'react';

// interface AptitudesProps {
//   activar: string;
// }

export default function Aptitudes(): JSX.Element {
//   let dinamico = { display: props.activar };
  return (
    <div className='concepto aptitudes'>
        <h3 className='titulo'>CONOCIMIENTO Y APTITUDES</h3>
        <li>Ingles: escrito(avanzado) y oral(intermedio)</li>
        <li>Data Entry (avanzado)</li>
        <li>Manejos de macros(avanzado)</li>
        <li>Word, Excel, Power Point (intermedio-avanzado)</li>
        <li>C++ (básico)</li>
        <li>SQLite(básico)</li>
        <li>Visual Studio Code(avanzado)</li>
        <li>GIT y GitHub (intermedio-avanzado)</li>
        <li>HTML, CSS, SASS, SEO (avanzado)</li>
        <li>Firebase (básico)</li>
        <li>JavaScript, JQuery (avanzado)</li>
        <li>Bootstrap y material ui (intermedio)</li>
    </div>
  );
}
