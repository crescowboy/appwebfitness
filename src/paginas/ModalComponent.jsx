import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

const ModalComponent = ({ isOpen, closeModal, imageSrc, description }) => {

  
  return (
    <Modal isOpen={isOpen} className="modal-tipo-cuerpo" onRequestClose={closeModal} contentLabel="Image Modal">
      
      <p>{description}</p>
      <button className='close-button' onClick={closeModal}><AiOutlineClose></AiOutlineClose>
      
      </button>
    </Modal>
  );
};

export default ModalComponent;
