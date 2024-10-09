import React, { useState } from 'react';
import imagen4 from "../assets/imagen4.png";
import Modal from './Modal';
import ParticipantsForm from './ParticipantsForm';

const SignupSection = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [stepsCompleted, setStepsCompleted] = useState({
    regulation: false,
    participants: false,
    terms: false,
  });

  const handleOpenModal = (modalName) => setActiveModal(modalName);
  const handleCloseModal = () => setActiveModal(null);

  const completeStep = (step) => {
    setStepsCompleted((prev) => ({
      ...prev,
      [step]: true,
    }));
    handleCloseModal();
  };

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imagen4})` }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 space-y-4">
        {/* Botón 1: Leer Reglamento */}
        <button 
          onClick={() => handleOpenModal('regulation')} 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Leer Reglamento
        </button>

        {/* Botón 2: Cargar Participantes (habilitado solo si completó el reglamento) */}
        <button 
          onClick={() => handleOpenModal('participants')} 
          className={`py-2 px-4 rounded transition duration-300 ${stepsCompleted.regulation ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`} 
          disabled={!stepsCompleted.regulation}
        >
          Cargar Participantes
        </button>

        {/* Botón 3: Aceptar Términos (habilitado solo si cargó los participantes) */}
        <button 
          onClick={() => handleOpenModal('terms')} 
          className={`py-2 px-4 rounded transition duration-300 ${stepsCompleted.participants ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`} 
          disabled={!stepsCompleted.participants}
        >
          Aceptar Términos
        </button>

        {/* Botón 4: Realizar Pago (habilitado solo si aceptó los términos) */}
        <button 
          onClick={() => handleOpenModal('payment')} 
          className={`py-2 px-4 rounded transition duration-300 ${stepsCompleted.terms ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`} 
          disabled={!stepsCompleted.terms}
        >
          Realizar Pago
        </button>
        
        {/* Modales */}
        {activeModal === 'regulation' && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Reglamento</h2>
            <p>Aquí iría el texto del reglamento...</p>
            <button 
              onClick={() => completeStep('regulation')} 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              He leído y entiendo
            </button>
          </Modal>
        )}

        {activeModal === 'participants' && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Cargar Participantes</h2>
            <ParticipantsForm onSubmit={(participants) => { 
              console.log(participants); 
              completeStep('participants');
            }} />
          </Modal>
        )}

        {activeModal === 'terms' && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Términos y Condiciones</h2>
            <p>Aquí irían los términos y condiciones...</p>
            <button 
              onClick={() => completeStep('terms')} 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Aceptar Términos
            </button>
          </Modal>
        )}

        {activeModal === 'payment' && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Realizar Pago</h2>
            <a 
              href="https://pagina-de-pago.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Ir a Página de Pago
            </a>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default SignupSection;

