/* Crear la base de datos si no existe */
CREATE DATABASE IF NOT EXISTS simo_db;
USE simo_db;

/* Crear la tabla para los contactos */
CREATE TABLE IF NOT EXISTS contacto_leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    empresa VARCHAR(150), -- Permite nulos por si el usuario no tiene empresa
    telefono VARCHAR(50) NOT NULL,
    correo VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);