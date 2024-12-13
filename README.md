# Biblioteca API

## Instrucciones

### Instalación
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install
   ```

### Uso
- Iniciar el servidor:
  ```bash
  npm run dev
  ```

### Endpoints
#### Autores
- **GET /autores**: Listar todos los autores.

#### Libros
- **GET /libros**: Listar todos los libros.
- **GET /libros/disponibles**: Obtener libros disponibles.
- **GET /libros/nodisponibles**: Obtener libros no disponibles.