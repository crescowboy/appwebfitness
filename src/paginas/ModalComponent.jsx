import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal, imageSrc, description }) => {

  
  return (
    <Modal isOpen={isOpen} className="modal-tipo-cuerpo" onRequestClose={closeModal} contentLabel="Image Modal">
      
      <p>{description}</p>
      <button className='cta-button' onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

export default ModalComponent;
