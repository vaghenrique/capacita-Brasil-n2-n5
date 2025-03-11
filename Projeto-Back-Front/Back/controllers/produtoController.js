const Produto = require("../models/produtoModel");

exports.listarProdutos = (req, res) => {
    const produtos = [
        new Produto(1, "Produto A", 100),
        new Produto(2, "Produto B", 200),
        new Produto(3, "Banana ", 1),
        new Produto(4, "Maçã ", 10)
    ];
    res.render("index", { produtos });
};