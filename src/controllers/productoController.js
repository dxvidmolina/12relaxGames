const fs = require('fs');
const path = require('path');
function findAll(){
    let todosProductos = fs.readFileSync(path.join(__dirname, "../data/arrayProductos.json"))
    let data = JSON.parse(todosProductos)
    return data
}
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
            producto1:(req,res)=>{
            res.render('home')
        },
            edit: (req, res) => {
            let product = Products.findById(req.params.id)
            res.render('productoform',{
                productToEdit: product
            });
        },
<<<<<<< HEAD
            upload: (req, res) => {
            let products_copy = Products.getAll().map(product => {
=======
        update: (req, res) => {
            let products_copy = Products.getAll().map(function(product){
>>>>>>> f0f29262d4c21cfd5c2cb745e351cbdf48cc4e4f
                    if (product.id == req.params.id) {
                        product.nombreJuego = req.body.nombreJuego
                        product.precio = req.body.precio
                        product.detalleJuego = req.body.detalleJuego
                        product.descuento = req.body.descuento
                    }
                    return product;
                });
    
            Products.modifiedAll(products_copy);
<<<<<<< HEAD
            res.redirect('/producto/edit'+ req.params.id)
    
        },
            destroy: (req, res) => {
            let products_copy = Products.getAll().filter(elem => elem.id != req.params.id);
            Products.modifiedAll(products_copy);
            res.redirect('/');
        },
            entrarproducto: (req,res)=>{
            res.render("producto");       
        },
             create: function(req, res){
                let arrayProductos = {
                name: req.body.name,
                price: req.body.price,
                genre: req.body.genre,
                desc: req.body.price,
                img: req.body.img
        }
        res.redirect("../listaProducto");
    
        },
            list: function(req, res){
        let productos = findAll();
        res.render("lista", {productos : productos})
        },
=======
            res.redirect("/products/"+req.params.id)
         }
>>>>>>> f0f29262d4c21cfd5c2cb745e351cbdf48cc4e4f
    }
        
module.exports= productoController;