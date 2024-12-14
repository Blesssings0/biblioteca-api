import { Router } from 'express';
import Biblioteca from '../controllers/biblioteca';
const router = Router();

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

export default router;