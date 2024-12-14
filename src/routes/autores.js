import { Router } from 'express';
import Biblioteca from '../controllers/biblioteca';
const router = Router();

router.get('/', (req, res) => {
  const autores = Biblioteca.listarAutores();
  res.json(autores);
});

export default router;