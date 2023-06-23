import React from 'react';
import "../CSS/ola.css"

interface OlaProps {
  olaText: string;
}

export default function Ola(props: OlaProps): JSX.Element {
  const { olaText } = props;

  return (
    <div className='olaContainer'>
      <h2 className='ola'>{olaText}</h2>
      <h2 className='ola2'>{olaText}</h2>
    </div>
  );
}
