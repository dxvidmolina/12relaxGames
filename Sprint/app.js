const express= require('express')
const app = express()
const path = require('path')

app.get('/', function(req,res){res.send('Hola Mundo!')})
app.get('/home', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/index.html'))})
app.get('/detalleproducto', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/detalleproduc.html'))})
app.get('/carrito', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/carrito.html'))})
app.get('/login', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/login.html'))})
app.get('/registro', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/registro.html'))})

app.get('*', function(req,res){
    res.send('NOT FOUND')
})

app.use(express.static('public'))

app.listen(3030, ()=> {
    console.log('Pagina corriendo en http://localhost:3030')

})



