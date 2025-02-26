const express = require("express");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");

app.set("view engine", "ejs");
app.use("/produtos", produtoRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});