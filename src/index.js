const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Importar rutas
const autoresRoutes = require('./routes/autores');
const librosRoutes = require('./routes/libros');

// Usar las rutas
app.use('/autores', autoresRoutes);
app.use('/libros', librosRoutes);


app.get('/', (req, res) => {
  res.send('Bienvenido a la API de la Biblioteca. Usa /autores o /libros para interactuar.');
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});