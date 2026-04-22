# 🏫 Sistema de Tareas Escolares

> Plataforma web para la gestión de tareas y avisos de una escuela secundaria, desarrollada como Trabajo Práctico Grupal de la materia Ciclo de Vida del Software.

---

## 📋 Descripción

Este sistema permite a **docentes** publicar tareas y avisos escolares, y a **alumnos** consultarlos organizados por materia y fecha de entrega. Fue desarrollado como prototipo web con roles diferenciados y autenticación mediante JWT.

---

## ✨ Funcionalidades

| Funcionalidad | Rol | Descripción |
|---|---|---|
| 📝 Publicar tareas | Docente | Crea tareas con título, descripción, materia y fecha de entrega |
| 📚 Ver tareas por materia | Alumno / Docente | Listado filtrado por materia |
| 📅 Fechas de entrega | Alumno | Las tareas próximas se resaltan visualmente |
| 📢 Publicar avisos | Docente | Comunicados visibles para todos los alumnos del curso |
| 🔐 Login con roles | Docente / Alumno | Autenticación JWT con redirección según rol |

---

## 🛠️ Tecnologías utilizadas

- **Frontend:** React 18 + Vite
- **Routing:** React Router DOM
- **HTTP client:** Axios
- **Autenticación:** JWT (JSON Web Tokens)
- **Base de datos:** MySQL
- **Estilos:** CSS / Tailwind CSS

---

## 🗂️ Estructura del proyecto

```
src/
├── context/
│   └── AuthContext.jsx       # Contexto global de autenticación y rol
├── pages/
│   ├── Login.jsx             # Pantalla de inicio de sesión
│   ├── PanelDocente.jsx      # Panel principal del docente
│   └── PanelAlumno.jsx       # Panel principal del alumno
├── components/
│   ├── Navbar.jsx            # Barra de navegación con datos del usuario
│   ├── TarjetaTarea.jsx      # Componente reutilizable de tarea
│   └── FormularioTarea.jsx   # Formulario para crear nueva tarea
├── services/
│   └── api.js                # Configuración de axios y llamadas a la API
└── App.jsx                   # Rutas protegidas por rol
```

---

## 🗃️ Modelo de base de datos (MySQL)

```sql
-- Usuarios del sistema
CREATE TABLE usuarios (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL,
  email       VARCHAR(150) UNIQUE NOT NULL,
  password    VARCHAR(255) NOT NULL,        -- encriptado con bcrypt
  rol         ENUM('docente', 'alumno') NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Materias disponibles
CREATE TABLE materias (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  nombre  VARCHAR(100) NOT NULL             -- Ej: Matemática, Historia
);

-- Tareas publicadas por los docentes
CREATE TABLE tareas (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  titulo         VARCHAR(200) NOT NULL,
  descripcion    TEXT,
  fecha_entrega  DATE NOT NULL,
  materia_id     INT NOT NULL,
  docente_id     INT NOT NULL,
  created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (materia_id)  REFERENCES materias(id),
  FOREIGN KEY (docente_id)  REFERENCES usuarios(id)
);

-- Avisos publicados por los docentes
CREATE TABLE avisos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  titulo      VARCHAR(200) NOT NULL,
  contenido   TEXT NOT NULL,
  docente_id  INT NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (docente_id) REFERENCES usuarios(id)
);
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/usuario/nombre-proyecto.git
cd nombre-proyecto
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:3000/api
```

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 👥 Roles de usuario

### 🧑‍🏫 Docente
- Inicia sesión y accede al panel de docente
- Puede publicar nuevas tareas con materia y fecha de entrega
- Puede publicar avisos para los alumnos
- Ve el listado de sus tareas publicadas

### 🎒 Alumno
- Inicia sesión y accede al panel de alumno
- Ve todas las tareas organizadas por materia
- Puede filtrar tareas por materia con un selector
- Ve las fechas de entrega (las próximas se resaltan)
- Ve los avisos publicados por los docentes

---

## 👨‍💻 Equipo de desarrollo

| Rol | Integrante | Responsabilidad |
|---|---|---|
| Analista | — | Relevamiento y requerimientos |
| Diseñador | — | Arquitectura, BD y wireframes |
| Frontend | — | Desarrollo en React + Vite |
| Tester | — | Pruebas y reporte de errores |
| Documentador | — | Informe final del proyecto |

---

## 📄 Licencia

Proyecto académico — Trabajo Práctico Grupal.
