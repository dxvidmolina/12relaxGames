const fs = require("fs");
const path = require("path");

function writeJson(array){
    let arrayJson = JSON.stringify(array);

    return false.writeFileSync(path.join(__dirname, "../data/user.json", arrayJson))
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
        let usuarios = findAll()

        let nuevoUsuario = {
            id: usuarios.length + 1,
            nombre: req.body.nombre,
            nickname: req.body.nickname,
            email: req.body.email,
            pais: req.body.pais,
            edad: req.body.edad,
            password: req.body.password
        }
        let usuariosActualizados = [...usuarios, nuevoUsuario]

        writeJson(usuariosActualizados)

        res.redirect("/")
    }


}



module.exports= registerController;
