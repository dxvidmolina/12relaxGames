function guestMiddleware(req, res, next){
    if (req.session.userToLogin == undefined) {
        next();
    }else{
        res.render("home")
    }
}

module.exports = guestMiddleware;