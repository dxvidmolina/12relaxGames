const fs = require('fs');
const path = require('path');
function findAll(){
    let todosProductos = fs.readFileSync(path.join(__dirname, "../data/arrayProductos.js"))
}

const productoController={
    entrarproducto:(req,res)=>{
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

        res.render("")
    }
    
}


module.exports= productoController;
