import React, { useState } from 'react';
import '../CSS/CertificadoViewer.css'; 

type Props = {
  archivos: string[]; // mezcla de .pdf, .jpg, .png, etc.
};

const CertificadoViewer: React.FC<Props> = ({ archivos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const next = () => {
    if (index < archivos.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const archivoActual = archivos[index];
  const extension = archivoActual.split('.').pop()?.toLowerCase();

  const esPdf = extension === 'pdf';
  const esImagen = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '');

  return (
    <span>
        <button className='btn-vermas' onClick={openModal}>
            &nbsp;
            ver mas
        </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {esPdf && (
              <iframe
                src={`${archivoActual}#toolbar=0`}
                title={`Archivo ${index + 1}`}
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              />
            )}

            {esImagen && (
              <img
                src={archivoActual}
                alt={`Imagen ${index + 1}`}
                style={{ maxWidth: '100%', maxHeight: '80vh' }}
              />
            )}

            {!esPdf && !esImagen && (
              <p>Tipo de archivo no compatible: {archivoActual}</p>
            )}

            <div className="modal-buttons">
                {archivos.length > 1 && (
                <>
                    <button
                    className='btn-index-back'
                    title='anterior'
                    onClick={prev}
                    disabled={index === 0}
                    >
                    ⬅
                    </button>

                    <button
                    className='btn-index-next'
                    title='siguiente'
                    onClick={next}
                    disabled={index === archivos.length - 1}
                    >
                    ➡
                    </button>
                </>
                )}

              <button className='btn-close'title='cerrar' onClick={closeModal}>X</button>
              {/* <a className='pestañaNueva' href="#">abrir en una pestaña nueva</a> */}
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

export default CertificadoViewer;
