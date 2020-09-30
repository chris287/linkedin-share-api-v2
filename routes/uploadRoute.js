var express = require('express');
var router = express.Router();
var methodObject = require('../handlers/methods')

router.post('/', async function(req, resp) {
    let postData = await methodObject.createPost(req.body);
    resp.send(postData);
})

module.exports = router;