const express = require('express');
const Biblioteca = require('../controllers/biblioteca');
const router = express.Router();

router.get('/', (req, res) => {
  const autores = Biblioteca.listarAutores();
  res.json(autores);
});

module.exports = router;