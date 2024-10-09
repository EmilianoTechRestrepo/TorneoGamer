const { Group, Participant } = require('../data');
const { Op } = require('sequelize');

// Controlador para crear un grupo con sus participantes
const createGroup = async (req, res) => {
  const { groupName, email, participants } = req.body;

  // Imprimir los datos recibidos
  console.log("Received data:", { groupName, email, participants });

  // participants será un array de objetos [{ username, age, email, phone }, ...]
  try {
    // Verificar si algún email o teléfono de los participantes ya está registrado
    for (const participant of participants) {
      const existingParticipant = await Participant.findOne({
        where: {
          [Op.or]: [
            { email: participant.email },
            { phone: participant.phone }
          ]
        }
      });

      // Imprimir si se encontró un participante existente
      if (existingParticipant) {
        console.log(`Existing participant found: ${existingParticipant}`);
        return res.status(400).json({
          error: `Participant with email ${participant.email} or phone ${participant.phone} already exists.`
        });
      }
    }

    // Crear el grupo
    const newGroup = await Group.create({ groupName, email });
    console.log("New group created:", newGroup);

    // Crear los participantes asociados al grupo
    const newParticipants = participants.map(participant => ({
      ...participant,
      groupId: newGroup.id,
    }));

    await Participant.bulkCreate(newParticipants);
    console.log("Participants created:", newParticipants);

    return res.status(201).json({ message: 'Group and participants created successfully', group: newGroup });
  } catch (error) {
    // Imprimir el error
    console.error("Error creating group and participants:", error);
    return res.status(500).json({ error: 'Error creating group and participants' });
  }
};


// Controlador para obtener todos los grupos con sus participantes
const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.findAll({
      include: {
        model: Participant,
        attributes: ['username', 'age', 'email', 'phone'], // Solo las propiedades que queremos ver de los participantes
      },
    });
    return res.status(200).json(groups);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving groups' });
  }
};

// Controlador para actualizar el estado de pago
const updatePaymentStatus = async (req, res) => {
  const { id } = req.params; // ID del grupo
  const { paymentStatus } = req.body;

  try {
    const group = await Group.findByPk(id);
    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    // Actualizar el estado de pago
    group.paymentStatus = paymentStatus;
    await group.save();

    return res.status(200).json({ message: 'Payment status updated successfully', group });
  } catch (error) {
    return res.status(500).json({ error: 'Error updating payment status' });
  }
};

const getGroupById = async (req, res) => {
    const { id } = req.params; // ID del grupo
  
    try {
      const group = await Group.findByPk(id, {
        include: {
          model: Participant,
          attributes: ['username', 'age', 'email', 'phone'], // Propiedades que queremos incluir de los participantes
        },
      });
  
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
  
      return res.status(200).json(group);
    } catch (error) {
      return res.status(500).json({ error: 'Error retrieving group' });
    }
  };

  const deleteGroup = async (req, res) => {
    const { id } = req.params;
  
    try {
      const group = await Group.findByPk(id);
      if (!group) {
        return res.status(404).json({ error: 'Group not found' });
      }
  
      await group.destroy();
      return res.status(200).json({ message: 'Group deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Error deleting group' });
    }
  };
  
  
  module.exports = {
    createGroup,
    getAllGroups,
    updatePaymentStatus,
    getGroupById, 
    deleteGroup 
  };