const fs = require ('fs')
const express = require('express');
const app = express()
const Contenedor = require('./contenedor.js')

const productos = new Contenedor('./productos.txt')

app.get('/productos', async (req, res) => {
    const prods = await productos.getAll()
    res.send(prods)
})

app.get('/productoRandom', async (req, res) => {
    const prods = await productos.getAll()
    const random = parseInt(Math.random() * prods.length)
    res.send(prods[random])
})


app.listen(8080, () => {
    console.log ('servidor escuchando c:');
  });