const express = require('express')

var app = express()

app.use(express.static('public'))

app.get('/suma', (req, res) => {
    let n1, n2;
    n1 = document.getElementById("n1")
    n2 = document.getElementById("n2")
    return res.send(`<h1>Resultado de la suma es ${n1 + n2}</h1>`)
})

app.get('/resta', (req, res) => {
    let n1, n2;
    n1 = document.getElementById("n1")
    n2 = document.getElementById("n2")
    return res.send(`<h1>Resultado de la resta es ${n1 - n2}</h1>`)
})

app.get('/multiplicacion', (req, res) => {
    let n1, n2;
    n1 = document.getElementById("n1")
    n2 = document.getElementById("n2")
    return res.send(`<h1>Resultado de la multiplicacion es ${n1 * n2}</h1>`)
})

app.get('/division', (req, res) => {
    let n1, n2;
    n1 = document.getElementById("n1")
    n2 = document.getElementById("n2")
    return res.send(`<h1>Resultado de la division es ${n1 / n2}</h1>`)
})

app.listen(8080, () => {
    console.log('Servidor escuchando desde puerto 8080')
})