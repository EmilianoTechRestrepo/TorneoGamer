const { Router } = require('express');
const { createGroup, getAllGroups, updatePaymentStatus, getGroupById, deleteGroup  } = require('../controllers/groupController');
const router = Router();

// Ruta para crear un grupo y sus participantes
router.post('/create', createGroup);

// Ruta para obtener todos los grupos junto con sus participantes (sólo para el administrador)
router.get('/', getAllGroups);

// Ruta para que el administrador actualice el estado de pago de un grupo
router.put('/payment/:id', updatePaymentStatus);

router.get('/:id', getGroupById)

router.delete('/:id', deleteGroup);

module.exports = router;
