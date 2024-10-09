const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Soporte para Bearer token
  if (!token) {
    return res.status(401).json({ error: 'Access denied' }); // Respuesta consistente
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; // Guardamos el usuario decodificado en la solicitud
    next(); // Llamamos a next() para continuar con la siguiente función middleware
  } catch (err) {
    return res.status(400).json({ error: 'Invalid token' }); // Respuesta consistente
  }
};

module.exports = auth;

