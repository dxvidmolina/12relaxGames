const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator")

function writeJson(array){
    let arrayJson = JSON.stringify(array);

    return fs.writeFileSync(path.join(__dirname, "../data/user.json"), arrayJson)
}

function findAll(){
    let usuarioJson= fs.readFileSync(path.join(__dirname, "../data/user.json"))
    let data = JSON.parse(usuarioJson)
    return data 
}


const registerController={
    crearUsuario: (req, res) => {
        res.render("registro.ejs")
    },

    guardarUsuario: (req, res) => {
        let errores = validationResult(req);
        if (!errores.isEmpty()){
            return res.render ("registro",{mensajesDeError: errores.mapped()})
        }
        let usuarios = findAll()
        let passwordEncriptar = bcrypt.hashSync(req.body.password, 10);
        let nuevoUsuario = {
            id: usuarios.length + 1,
            nombre: req.body.nombre,
            nickname: req.body.nickname,
            email: req.body.email,
            pais: req.body.pais,
            edad: req.body.edad,
            password: passwordEncriptar
        }
        if (req.body.email1==req.body.email && req.body.password == req.body.password1){
            let usuarioCheck = findAll().find(function(element) {
                return element.email == nuevoUsuario.email});
    
            for (i=0; i=findAll().length; i++){
                console.log(usuarioCheck)
                if (usuarioCheck == null){
                    let usuariosActualizados = [...usuarios, nuevoUsuario]
                    writeJson(usuariosActualizados)
                    res.redirect("/login")
                }
                else{
                    res.redirect("/registro")
                }
           }
        }
    
        else{
            res.render("registro.ejs"), {
            errorMessage: "Su email o contraseña no coinciden"
            }
        }
    }}
        



module.exports= registerController;
