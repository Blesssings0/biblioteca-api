const data = require('../data/data.json'); // Cargar datos iniciales

class Biblioteca {
  static listarAutores() {
    return data.autores;
  }

  static listarLibros() {
    return data.libros;
  }

  static librosDisponibles() {
    return data.libros.filter(libro => libro.disponible);
  }

  static librosNoDisponibles() {
    return data.libros.filter(libro => !libro.disponible);
  }
}

module.exports = Biblioteca;