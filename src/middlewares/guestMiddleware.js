function guestMiddleware(req, res, next){
    if (req.session.userToLogin != undefined) {
        next();
    }else{
        res.render("login")
    }
}

module.exports = guestMiddleware;