
import React, { useState } from 'react';
import quinto from "../multimedia/certificado-quinto.png"
import quinto2 from "../multimedia/certificado-quinto-2.png"

export default function Cetificado() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexImg,setIndexImg]=useState(0)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleImg = () => {
    setIndexImg(1)
    indexImg===0? setIndexImg(1): setIndexImg(0)
  }
  const imgDinamic= indexImg===0? quinto:quinto2
const backStyle={
  visibility:`${indexImg===0? "hidden": "visible"}`
}
const nextStyle={
  visibility:`${indexImg===1? "hidden": "visible"}`
}
  return (
    <div className='btn-content'>
      <button onClick={openModal} className='btn-vermas'>Ver mas</button>

      {isModalOpen && (
        <div className="modal-overlay" >
            <button className='btn-index-modal' style={backStyle} onClick={handleImg}  >{"<"}</button>
            <div className="modal-content">
              <img src={imgDinamic} alt="Certificado" />
              <button onClick={closeModal}>X</button>
            </div>
            <button className='btn-index-modal' style={nextStyle} onClick={handleImg} >{">"}</button>
        </div>
      )}
    </div>
  );
}

