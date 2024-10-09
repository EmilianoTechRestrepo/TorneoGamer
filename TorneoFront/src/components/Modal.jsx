
import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

// Validación de props
Modal.propTypes = {
  children: PropTypes.node.isRequired,  // Asegura que 'children' sea un nodo de React
  onClose: PropTypes.func.isRequired,   // Asegura que 'onClose' sea una función
};

export default Modal;

