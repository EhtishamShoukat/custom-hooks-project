import React from 'react';
import { useModal } from './Components/useModal';

const Modal = ({ isOpen, closeModal, modalData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>{modalData ? modalData.message : 'No Data'}</p>
        <button className="btn btn-danger" style={{width:"10%"}}onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

const App = () => {
  const { isOpen, openModal, closeModal, modalData } = useModal();

  return (
    <div className='container'>
      <h1>useModal Example</h1>
      <button className='btn btn-primary'
        onClick={() => openModal({ message: 'AoA from modal' })}
      >
        Open Modal with Data
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal} modalData={modalData} />
    </div>
  );
};

export default App;
