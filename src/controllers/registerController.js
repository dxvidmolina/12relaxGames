const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
<<<<<<< HEAD
const { validationResult } = require("express-validator");
=======
const { validationResult } = require("express-validator")
let db= require("../../database/models");
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca

//Funciones

//Reescribir Json
function writeJson(array){
    let arrayJson = JSON.stringify(array);

    return fs.writeFileSync(path.join(__dirname, "../data/user.json"), arrayJson)
}
<<<<<<< HEAD
=======
//Buscar usuarios
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
function findAll(){
    let usuarioJson= fs.readFileSync(path.join(__dirname, "../data/user.json"))
    let data = JSON.parse(usuarioJson)
    return data 
}


//Funciones

//Controller
const registerController={

    //Entrar a la vista

    crearUsuario: (req, res) => {
<<<<<<< HEAD
        res.render('registro.ejs')
=======
        res.render("registro")
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
    },
    
    //Guardar usuario, con validaciones previas y sin sobreescribir

    guardarUsuario: (req, res) => {
<<<<<<< HEAD
        let errors = validationResult(req);
        if(errors.isEmpty){
=======
       db.User.create({
            name: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            nickname: req.body.nickname,
            pais: req.body.pais,
            edad: req.body.edad,
        }).then(function(){
             res.redirect("/login")
         })
        /*let errores = validationResult{
            validationResult(req);
        if (!errores.isEmpty()){
            console.log(errores)
            return res.render ('registro', {errores: errores.array()})
        }   
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
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
<<<<<<< HEAD
                
=======
        
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
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
<<<<<<< HEAD
            }
        
            else{
                res.render("registro.ejs"), {
                errorMessage: "Su email o contraseña no coinciden"
                }
            }
        } else {
            res.render('registro', 
            {errors: errors.array(),
            old: req.body})
        }
    }
        
}


=======
            }else{
                res.render("registro", {
                errorMessage: "Su email o contraseña no coinciden"
            })}
        

        */}
}
>>>>>>> f98e92c0cbf7e8052d4111804a2432311d0312ca
        

module.exports = registerController;