// Importar módulos necesarios
import express from 'express';
import { json } from 'body-parser';

// Crear una instancia de Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(json());

// Datos en memoria
let autores = [
    { id: 1, nombre: 'Gabriel García Márquez' },
    { id: 2, nombre: 'Isabel Allende' }
];

let libros = [
    { id: 1, titulo: 'Cien años de soledad', autorId: 1, disponible: true },
    { id: 2, titulo: 'La casa de los espíritus', autorId: 2, disponible: false }
];

// Endpoints para autores
app.get('/autores', (req, res) => {
    res.json(autores);
});

// Endpoints para libros
app.get('/libros', (req, res) => {
    res.json(libros);
});

app.get('/libros/disponibles', (req, res) => {
    const librosDisponibles = libros.filter(libro => libro.disponible);
    res.json(librosDisponibles);
});

app.get('/libros/nodisponibles', (req, res) => {
    const librosNoDisponibles = libros.filter(libro => !libro.disponible);
    res.json(librosNoDisponibles);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
