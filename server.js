// Proyecto: Menu de Restaurante Web
// Desarrollador: Fabian Guerrero
// Fecha: 2025
console.log("Desarrollado por Fabian Guerrero");

const express = require("express");
const path = require("path");
const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/menu.html'));
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});