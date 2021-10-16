const express= require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, "./public");
const multer= require('multer');
const methodOverride = require('method-override');
const session = require('express-session')

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false
}));
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/producto');
const registerRouter = require('./routes/register')

/*const adminAddRouter = require('');
const adminRouter = require('');
*/

app.get('/carrito', (req, res) => {
    res.render('carrito')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride("_method"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));

app.use('/', homeRouter);

app.use('/login', usersRouter);
app.use('/products', productRouter)
app.use('/registro', registerRouter)
app.get("/perfil",(req,res)=>res.render("perfil"))

app.use(function(req, res, next) {
    next(createError(404));
  });

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(3030, ()=> {
    console.log('Pagina corriendo en http://localhost:3030')
})

module.exports = app;

