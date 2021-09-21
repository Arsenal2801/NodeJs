const express = require('express')

var app = express()

app.use(express.static('public'))

app.post('/ruta-post',(req,res)=>{
    return res.send("Hola desde la ruta post")
})

app.get('/ruta-get',(req,res)=>{
    return res.send("<h1>hola desde la ruta get</h1>")
})

app.listen(8080,()=>{
    console.log('Servidor escuchando desde puerto 8080')
})