import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg relative max-h-[80vh] w-full max-w-3xl overflow-y-auto">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

// Validación de props
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

