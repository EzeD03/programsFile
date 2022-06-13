const express = require("express")
const app = express()
const port = 3030

app.get("/", (req,res) => res.send("Bienvenidos a mí servidor."))
app.get("/contacto", (req,res) => res.send("Mi número es 11-5818-8288."))

app.listen(port, () => console.log(`Servidor corriendo en https://localhost:${port}`))