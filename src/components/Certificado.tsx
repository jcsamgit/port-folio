// import {Link} from "react-router-dom"

import React, { useState } from 'react';
import quinto from "../multimedia/certificado-quinto.png"

export default function Cetificado() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
const mayor= ">>>"
  return (
    <div className='btn-content'>
      <button onClick={openModal} className='btn-quinto'>Ver mas {mayor}</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={quinto} alt="Imagen grande" />
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

