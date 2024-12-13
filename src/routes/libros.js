const express = require('express');
const Biblioteca = require('../controllers/biblioteca');
const router = express.Router();

router.get('/', (req, res) => {
  const libros = Biblioteca.listarLibros();
  res.json(libros);
});

router.get('/disponibles', (req, res) => {
  const libros = Biblioteca.librosDisponibles();
  res.json(libros);
});

router.get('/nodisponibles', (req, res) => {
  const libros = Biblioteca.librosNoDisponibles();
  res.json(libros);
});

module.exports = router;