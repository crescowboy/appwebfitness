import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal, imageSrc, description }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Image Modal">
      <img src={imageSrc} alt="Tipo de Cuerpo" />
      <p>{description}</p>
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};

export default ModalComponent;
