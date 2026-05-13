const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });
dotenv.config();

const app = express();

// Permite que React se comunique con el backend
app.use(cors());
// Permite leer JSON en las peticiones
app.use(express.json());

// Conexion a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Verifica que la conexion fue exitosa
db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a MySQL correctamente");
});

// Endpoint para guardar un contacto
app.post("/api/contacto", (req, res) => {
  const { Nombre, Empresa, Telefono, Correo, Descripcion } = req.body;

  const query = `
    INSERT INTO contacto_leads (nombre, empresa, telefono, correo, descripcion)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [Nombre, Empresa, Telefono, Correo, Descripcion], (err, result) => {
    if (err) {
      console.error("Error al guardar:", err);
      // Devuelve error al frontend
      return res.status(500).json({ ok: false, mensaje: "Error al guardar el contacto" });
    }
    // Devuelve exito al frontend con el ID generado
    res.json({ ok: true, mensaje: "Contacto guardado correctamente", id: result.insertId });
  });
});

// Endpoint para ver todos los contactos guardados (para verificar que funciona)
app.get("/api/contacto", (req, res) => {
  db.query("SELECT * FROM contacto_leads ORDER BY fecha_registro DESC", (err, rows) => {
    if (err) {
      return res.status(500).json({ ok: false, mensaje: "Error al obtener contactos" });
    }
    res.json(rows);
  });
});

// Inicia el servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});