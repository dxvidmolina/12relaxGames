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
            res.redirect('/producto/edit'+ req.params.id)
    
        },
        destroy : (req, res) => {
            let products_copy = Products.getAll().filter(elem => elem.id != req.params.id);
            Products.modifiedAll(products_copy);
            res.redirect('/');
        },
    }
        
module.exports= productoController;