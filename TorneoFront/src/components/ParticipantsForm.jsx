/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGroup } from '../redux/Actions/actions'; // Asegúrate de ajustar la ruta

const ParticipantsForm = ({ onSubmit }) => {
  const dispatch = useDispatch(); // Inicializa dispatch
  const [groupName, setGroupName] = useState('');
  const [participants, setParticipants] = useState([{ username: '', age: '', email: '', phone: '' }]);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleParticipantChange = (index, field, value) => {
    const updatedParticipants = participants.map((participant, i) =>
      i === index ? { ...participant, [field]: value } : participant
    );
    setParticipants(updatedParticipants);
  };

  const addParticipant = () => {
    if (participants.length < 4) {
      setParticipants([...participants, { username: '', age: '', email: '', phone: '' }]);
    }
  };

  const removeParticipant = (index) => {
    if (participants.length > 1) {
      const updatedParticipants = participants.filter((_, i) => i !== index);
      setParticipants(updatedParticipants);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (groupName === '') {
      setError('Debes ingresar un nombre de grupo.');
      return;
    }
    if (email === '') { // Validación para el email
      setError('Debes ingresar un email del líder del grupo.');
      return;
    }
    if (participants.length !== 4) {
      setError('Debes ingresar exactamente 4 participantes.');
      return;
    }
    setError('');

    // Preparar el objeto groupData
    const groupData = { groupName, email, participants };
    
    console.log("Enviando el siguiente body al backend:", groupData);

    // Despachar la acción createGroup
    try {
      await dispatch(createGroup(groupData)); // Usa dispatch para llamar a la acción
      onSubmit(groupData); // Llama a onSubmit solo después de crear el grupo
    } catch (error) {
      setError('Error al crear el grupo.'); // Manejo de errores si es necesario
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-bold">Nombre del Grupo:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="mt-1 block w-full p-2 border rounded"
        />
      </div>
      <div>
  <label className="block text-sm font-bold">Email del Líder del Grupo:</label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="mt-1 block w-full p-2 border rounded"
    required // Puedes marcarlo como requerido
  />
</div>
      {participants.map((participant, index) => (
        <div key={index} className="border p-4 rounded mb-4">
          <h3 className="text-sm font-bold mb-2">Participante {index + 1}</h3>
          <input
            type="text"
            placeholder="Username"
            value={participant.username}
            onChange={(e) => handleParticipantChange(index, 'username', e.target.value)}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="number"
            placeholder="Edad"
            value={participant.age}
            onChange={(e) => handleParticipantChange(index, 'age', e.target.value)}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={participant.email}
            onChange={(e) => handleParticipantChange(index, 'email', e.target.value)}
            className="block w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={participant.phone}
            onChange={(e) => handleParticipantChange(index, 'phone', e.target.value)}
            className="block w-full p-2 border rounded mb-2"
          />
          {participants.length > 1 && (
            <button
              type="button"
              onClick={() => removeParticipant(index)}
              className="bg-red-500 text-white py-1 px-2 rounded"
            >
              Eliminar Participante
            </button>
          )}
        </div>
      ))}
      {participants.length < 4 && (
        <button
          type="button"
          onClick={addParticipant}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Agregar Participante
        </button>
      )}
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
        Enviar Participantes
      </button>
    </form>
  );
};

export default ParticipantsForm;


