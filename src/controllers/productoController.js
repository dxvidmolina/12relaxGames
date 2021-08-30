const Products = require('../models/product.js')
const productoController=
        {
            detail: (req, res) => {
            let product = Products.findById(req.params.id)
            if(product){
                res.render('detail',{
                    product: product,
                });
            }else{
                res.redirect('/')
            }
        },
            producto1 :(req,res)=>{
            res.render('home')
        },
        edit: (req, res) => {
            let product = Products.findById(req.params.id)
            res.render('productoform',{
                productToEdit: product
            });
        },
        update: (req, res) => {
            let products_copy = Products.getAll().map(function(product){
                    if (product.id == req.params.id) {
                        product.nombreJuego = req.body.nombreJuego
                        product.precio = req.body.precio
                        product.detalleJuego = req.body.detalleJuego
                        product.descuento = req.body.descuento
                    }
                    return product;
                });
    
            Products.modifiedAll(products_copy);
            res.redirect("/products/"+req.params.id)
         }
    }
        
module.exports= productoController;