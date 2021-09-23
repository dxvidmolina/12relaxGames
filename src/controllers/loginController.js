const User = require("../models/users.js")
const loginController={
    entrarLogin:(req,res)=>{
        res.render("login")
        
    },
    process: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);
		if(userToLogin){
            if(userToLogin.password === req.body.password){
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
