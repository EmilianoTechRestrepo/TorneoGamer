const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../data'); // Asegúrate de que el modelo User esté bien importado.

// Asegúrate de importar el middleware
const registerAdmin = async (req, res) => {
  const { email, password, role } = req.body;

 

  try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
          
          return res.status(400).json({ error: 'User already exists' });
      }

      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
     

      const newUser = await User.create({ email, password: hashedPassword, role });
      
      // Generar un token JWT para el nuevo usuario
      const token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.JWT_SECRET_KEY, {
          expiresIn: '1h',
      });

      return res.status(201).json({
          message: 'Admin registered successfully',
          user: newUser,
          token, // Incluir el token en la respuesta
      });
  } catch (error) {
      console.error('Error en el registro:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    

    // Buscar al usuario en la base de datos
    const user = await User.findOne({ where: { email: email.trim() } });
    

    if (!user) {
      console.error('Usuario no encontrado para el email:', email);
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Comparar la contraseña proporcionada con la hasheada
    const isMatch = await bcrypt.compare(password.trim(), user.password);
    

    if (!isMatch) {
      console.error('La contraseña no coincide para el usuario:', email);
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    // Enviar respuesta con el token
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error de inicio de sesión:', error); // Registra cualquier error inesperado
    return res.status(500).json({ error: 'Internal server error' });
  }
};




module.exports = {
    registerAdmin,
    login,
};


  
