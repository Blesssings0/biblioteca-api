// Importar módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');

// Crear una instancia de Express
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

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

app.get('/autores/buscar', (req, res) => {
    const { nombre } = req.query;
    if (!nombre) {
        return res.status(400).json({ error: 'Debes proporcionar un nombre para buscar.' });
    }
    const autor = autores.find(a => a.nombre.toLowerCase().includes(nombre.toLowerCase()));
    if (autor) {
        res.json(autor);
    } else {
        res.status(404).json({ error: 'Autor no encontrado.' });
    }
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

app.get('/libros/buscar', (req, res) => {
    const { titulo } = req.query;
    if (!titulo) {
        return res.status(400).json({ error: 'Debes proporcionar un título para buscar.' });
    }
    const libro = libros.find(l => l.titulo.toLowerCase().includes(titulo.toLowerCase()));
    if (libro) {
        res.json(libro);
    } else {
        res.status(404).json({ error: 'Libro no encontrado.' });
    }
});

app.post('/libros', (req, res) => {
    const { titulo, autorId, disponible } = req.body;
    if (!titulo || !autorId) {
        return res.status(400).json({ error: 'El título y el ID del autor son obligatorios.' });
    }
    const autorExiste = autores.some(a => a.id === autorId);
    if (!autorExiste) {
        return res.status(404).json({ error: 'El autor con el ID proporcionado no existe.' });
    }
    const nuevoLibro = {
        id: libros.length + 1,
        titulo,
        autorId,
        disponible: disponible ?? true
    };
    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
});

// Middleware para manejar rutas no definidas
app.use((req, res) => {
    res.status(404).json({
        error: 'Lo sentimos, la ruta solicitada no existe. Verifica la URL e intenta nuevamente.'
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
