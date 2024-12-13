class Libro {
  constructor(id, titulo, autorId, disponible = true) {
    this.id = id;
    this.titulo = titulo;
    this.autorId = autorId;
    this.disponible = disponible;
  }
}

module.exports = Libro;