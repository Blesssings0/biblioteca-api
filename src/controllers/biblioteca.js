import { autores, libros } from '../data/data.json'; // Cargar datos iniciales

class Biblioteca {
  static listarAutores() {
    return autores;
  }

  static listarLibros() {
    return libros;
  }

  static librosDisponibles() {
    return libros.filter(libro => libro.disponible);
  }

  static librosNoDisponibles() {
    return libros.filter(libro => !libro.disponible);
  }
}

export default Biblioteca;