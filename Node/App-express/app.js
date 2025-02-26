const express = require("express");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");

app.set("view engine", "ejs");
app.use("/produtos", produtoRoutes);

// Definir uma rota raiz para redirecionar para /produtos
app.get("/", (req, res) => {
    res.redirect("/produtos");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});