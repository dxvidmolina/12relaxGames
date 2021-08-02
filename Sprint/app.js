const express= require('express');
const app = express();
const path = require('path');
<<<<<<< HEAD

=======
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));
>>>>>>> 601e9a28ad421029dabf996dfa386e43cd094204
app.get('/producto', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/producto.html'))});
app.get('/carrito', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/carrito.html'))});
app.get('/login', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/login.html'))});
app.get('/registro', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/registro.html'))});
app.get('/home', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/index.html'))});
<<<<<<< HEAD
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.listen(3030, ()=> {
    console.log('Pagina corriendo en http://localhost:3030')
})


=======
app.listen(3030, ()=> {
    console.log('Pagina corriendo en http://localhost:3030')
})
>>>>>>> 601e9a28ad421029dabf996dfa386e43cd094204
