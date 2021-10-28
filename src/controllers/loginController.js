const User = require("../models/users.js")
const bcryptjs = require("bcryptjs")
const { validationResult } = require("express-validator")
const loginController={
    entrarLogin:(req,res)=>{
        res.render("login")
        
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty){

        }else {
            return res.render('login', {errors: errors.errors})
        }
        let userToLogin = User.findByField('email', req.body.email);
		if(userToLogin){
            let passwordCorrect = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passwordCorrect){
                req.session.userLogged = userToLogin;
                return res.redirect("/login/perfil")
            }
            return res.render('login',{
                errors: {
                    email: {
                        msg: "Email o Contraseña son incorrectos"
                    }
                }
            })
            
        }
        req.session.userToLogin = userLogued;
        return res.render('login',{
            errors: {
                email: {
                    msg: "Email inválido"
                }
            }
        })
		
	},
    profile: (req,res)=>{
        res.render("perfil",{user: req.session.userLogged} )
    },
    logout: (req,res)=>{
        req.session.destroy()
        return res.redirect("/")
    }
}
module.exports= loginController;
