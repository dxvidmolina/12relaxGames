const fs = require('fs');
const path = require('path');
const Products = require('../models/product')
let db= require("../../database/models");
const e = require('express');
const sequelize = db.sequelize;

function findAll(){
    let todosProductos = fs.readFileSync(path.join(__dirname, "../data/arrayProductos.json"))
    let data = JSON.parse(todosProductos)
    return data
}
const productoController=
        {
            detail: (req, res) => {
            /*let errores = validationResult(req);
            if (!errores.isEmpty()){
                    console.log(errores)
                return res.render ('registro', {errores: errores.array()})
                res.redirect("crearProducto");
                }*/
            let product = Products.findById(req.params.id)
            if(product){
                res.render('detail',{
                    product: product,
                });
            }
            else{
                res.redirect('/')
            }
        },
            producto1:(req,res)=>{
            res.render('home')
        },
            edit: (req, res) => {
            let product = Products.findById(req.params.id)
            res.render('productoform',{
                productToEdit: product
            });
        },
            upload: (req, res) => {
            let products_copy = Products.getAll().map(product => {
                    if (product.id == req.params.id) {
                        product.nombreJuego = req.body.nombreJuego
                        product.precio = req.body.precio
                        product.detalleJuego = req.body.detalleJuego
                        product.descuento = req.body.descuento
                    }
                    return product;
                });
    
            Products.modifiedAll(products_copy);
            res.redirect('/products/'+ req.params.id)
    
        },
            destroy: (req, res) => {
            let products_copy = Products.getAll().filter(elem => elem.id != req.params.id);
            Products.modifiedAll(products_copy);
            res.redirect('/');
        },
            entrarproducto: (req,res)=>{
            res.render("producto");       
        },  create: (req,res)=>{
            res.render("crearProducto")
        },
             storage: function(req, res){
                let arrayProductos = {
                name: req.body.name,
                price: req.body.price,
                genre: req.body.genre,
                desc: req.body.price,
                img: req.body.img
        }
        res.redirect("crearProducto");
    
        },
        'list': (req, res) => {
            db.Producto.findAll()
                .then(producto => {
                    res.render('lista', {producto : producto})
                })
                .catch(error => {
                    console.log("error")
                })
        }
}
        
module.exports= productoController;