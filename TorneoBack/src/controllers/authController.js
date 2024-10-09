const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../data'); // Asegúrate de que el modelo User esté bien importado.

// Asegúrate de importar el middleware
const registerAdmin = async (req, res) => {
  const { email, password, role } = req.body;

  console.log('Registro iniciado con datos:', { email, password, role });

  try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
          console.log('Usuario ya existe:', existingUser);
          return res.status(400).json({ error: 'User already exists' });
      }

      // Encriptar la contraseña
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Contraseña encriptada:', hashedPassword);

      const newUser = await User.create({ email, password: hashedPassword, role });
      console.log('Usuario registrado:', newUser);

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
    console.log('Login iniciado con datos:', { email: email.trim(), password: password.trim() }); // Eliminar espacios

    // Buscar al usuario en la base de datos
    const user = await User.findOne({ where: { email: email.trim() } });
    console.log('Usuario encontrado:', user); // Log del usuario encontrado

    if (!user) {
      console.error('Usuario no encontrado para el email:', email);
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Comparar la contraseña proporcionada con la hasheada
    const isMatch = await bcrypt.compare(password.trim(), user.password);
    console.log('Contraseña proporcionada:', password.trim()); // Log de la contraseña proporcionada
    console.log('Contraseña hasheada en la base de datos:', user.password); // Log de la contraseña hasheada
    console.log('¿Contraseña coincidente?', isMatch); // Log del resultado de la comparación

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


  
