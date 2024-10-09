/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGroups,
  updatePaymentStatus,
  deleteGroup,
} from "../../redux/Actions/actions"; 

const GroupManagement = () => {
  const dispatch = useDispatch();
  const groups  = useSelector((state) => state.groups || []);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const [editingGroup, setEditingGroup] = useState(null);

  useEffect(() => {
    console.log("Fetching groups...");
    dispatch(fetchGroups());
  }, [dispatch]);

  const handleUpdatePaymentStatus = (id, currentStatus) => {
    const newStatus = !currentStatus; 
    dispatch(updatePaymentStatus(id, newStatus));
  };

  const handleDeleteGroup = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este grupo?")) {
      dispatch(deleteGroup(id));
    }
  };

  const handleEditGroup = (group) => {
    setEditingGroup(group);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateGroup(editingGroup.id, editingGroup)); // Asegúrate de tener esta acción
    setEditingGroup(null); // Cerrar el formulario de edición
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingGroup((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!Array.isArray(groups) || groups.length === 0) {
    return <div>No hay grupos disponibles.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">Gestión de Grupos</h1>
      <button onClick={handlePrint} className="bg-gray-500 text-white py-2 px-4 mb-4">
        Imprimir
      </button>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Nombre del Grupo</th>
            <th className="py-2 px-4 border-b">Estado de Pago</th>
            <th className="py-2 px-4 border-b">Participantes</th>
            <th className="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{group.id}</td>
              <td className="py-2 px-4 border-b">{group.groupName}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleUpdatePaymentStatus(group.id, group.paymentStatus)}
                  className={`py-1 px-2 rounded ${
                    group.paymentStatus ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {group.paymentStatus ? "Pagado" : "No Pagado"}
                </button>
              </td>
              <td className="py-2 px-4 border-b">
                {group.Participants.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {group.Participants.map((participant) => (
                      <li key={participant.email}>
                        {participant.username} - {participant.age} años - {participant.email} - {participant.phone}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No hay participantes</span>
                )}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleEditGroup(group)} // Llamada a la función de edición
                  className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteGroup(group.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingGroup && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Editar Grupo</h2>
          <form onSubmit={handleFormSubmit} className="mb-4">
            <label className="block mb-2">
              Nombre del Grupo:
              <input
                type="text"
                name="groupName"
                value={editingGroup.groupName}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
                required
              />
            </label>
            <label className="block mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={editingGroup.email}
                onChange={handleChange}
                className="border rounded py-1 px-2 w-full"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Guardar Cambios
            </button>
            <button
              type="button"
              onClick={() => setEditingGroup(null)} // Cerrar el formulario de edición
              className="bg-gray-500 text-white py-2 px-4 ml-2 rounded"
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GroupManagement;

