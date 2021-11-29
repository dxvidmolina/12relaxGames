const fs = require('fs');
const path = require('path');
const Products = require('../models/product')
let db= require("../../database/models");
const e = require('express');
const sequelize = db.sequelize;
const { validationResult } = require ('express-validator')

const productoController =
            {detail: (req, res) => {
                    db.Producto.findByPk(req.params.id)
                        .then(producto => {
                        res.render('detail', {producto : producto})
                        })
                        .catch(function(){
                        console.log('error')
                    })

                },edit:(req, res) => {
                    db.Producto.findByPk(req.params.id)
                        .then((productToEdit) =>{
                            res.render('productoform',{productToEdit : productToEdit})
                            })

                },upload:(req, res) => {
                    db.Producto.update({
                        name: req.body.nombreJuego,
                        price: req.body.precio,
                        description: req.body.detalleJuego,
                        discount: req.body.descuento,
                        creation_date : '2020-12-16 12:00:00',
                        genre_id: req.body.generos,
                    },
                        { where: {
                            id: req.params.id}
                        }).then(function(){
                        res.redirect('/products/' + req.params.id)
                    })
                    
                },destroy:(req, res) => {
                    db.Producto.destroy({
                        where: {id: req.params.id}
                    }).then(function(){
                        res.redirect('/products/lista')
                    })



                    /*let products_copy = Products.getAll().filter(elem => elem.id != req.params.id);
                    Products.modifiedAll(products_copy);
                    res.redirect('/');

                */},entrarproducto: (req,res)=>{
                    res.render("producto");   

                },create: (req,res)=>{
                    res.render("crearProducto")

                },storage: function(req, res){
                    let errores = validationResult(req);
                        if (!errores.isEmpty()){
                        res.render ('crearProducto', {errores: errores.array()})
                        }else {
                            db.Producto.create({
                                name: req.body.name,
                                price: req.body.price,
                                description: req.body.desc,
                                discount: req.body.descuento,
                                creation_date : '2020-12-16 12:00:00',
                                genre_id: req.body.generos,
                                imgref: req.body.img
                            })
                            .then(function(){ res.redirect('/products/lista')})
                        }

                },list:(req, res) => {
                        db.Producto.findAll({
                            include:[{association:"generos"}]})
                                .then(producto => {
                                res.render('lista', {producto : producto})
                            })
                            .catch(error => {console.log(error)})
                }
            }
<<<<<<< HEAD
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
         list: function(req, res){
            db.Producto.findAll()
            .then(function(productos){
             return res.send(productos)
            .catch(alert)
            })}
}
        
=======
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
module.exports= productoController;