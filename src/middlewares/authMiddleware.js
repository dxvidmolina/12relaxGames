function authMiddleware(req, res, next){
    if (req.session.userToLogin != undefined) {
        next();
    }else{
        res.render("perfil")
    }
}

module.exports = authMiddleware;