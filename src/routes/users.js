var express = require('express');
var router = express.Router();
const loginController= require ("../controllers/loginController.js")

/* GET users listing. */
router.get('/', loginController.entrarLogin);
router.post('/', loginController.process)


module.exports = router;
