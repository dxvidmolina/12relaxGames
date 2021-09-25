const User = require("../models/users.js")
const bcryptjs = require("bcryptjs")
const loginController={
    entrarLogin:(req,res)=>{
        res.render("login")
        
    },
    process: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
		if(userToLogin){
            let passwordCorrect = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(passwordCorrect){
                return res.redirect("/")
            } 
            return res.render('login',{
                errors: {
                    email: {
                        msg: "Email o Contraseña son incorrectos"
                    }
                }
            })

        }
        return res.render('login',{
            errors: {
                email: {
                    msg: "Email inválido"
                }
            }
        })
		
	}}
module.exports= loginController;
