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
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

// Middleware para rutas no definidas
app.use((req, res, next) => {
  res.status(404).json({
      error: "Lo sentimos, la ruta solicitada no existe. Verifica la URL e intenta nuevamente."
  });
});

