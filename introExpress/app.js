const express = require("express")
const path = require("path")
const app = express()
const port = 3030

app.get("/", (req,res) => res.send("Bienvenidos a mí servidor."))
app.get("/contacto", (req,res) => res.send("Mi número es 11-5818-8288."))
app.get("/bienvenida", (req,res) => res.send("Llegaste bien pedazo de forro y la recalcadaconchadetumadre"))
app.get("/home",(req,res) => res.sendFile(path.join(__dirname, "views", "home.html")))
app.get("/login",(req,res) => res.sendFile(path.join(__dirname, "views", "login.html")))
app.get("/registro",(req,res) => res.sendFile(path.join(__dirname, "views", "registro.html")))
app.get("/detalle",(req,res) => res.sendFile(path.join(__dirname, "views", "detalle.html")))
app.get("/carrito",(req,res) => res.sendFile(path.join(__dirname, "views", "carrito.html")))

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))