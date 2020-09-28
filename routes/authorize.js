var express = require('express');
var router = express.Router();
var methodObject = require('../handlers/methods')

router.get('/',async function(req,resp){
    let data = await methodObject.authorizeUser()
    resp.send(data)
});


module.exports = router;