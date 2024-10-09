const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const { registerAdmin, login } = require('../controllers/authController');

router.post('/register', registerAdmin); // Registrar al admin (hazlo una sola vez)
router.post('/login', login); // Inicio de sesión

module.exports = router;
