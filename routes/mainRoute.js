var express = require('express');
var router = express.Router();
var methodObject = require('../handlers/methods')

router.post('/status', async function(req, resp) {
    let data = await methodObject.getUploadStatus(req.body);
    resp.send(data)
})

router.post('/', async function(req, resp) {
    let postData = await methodObject.registerUpload(req.body);
    resp.send(postData)
})

router.put('/', async function(req, resp) {
    let putData = await methodObject.uploadImage(req.body)
    resp.send(putData)
})

router.post('/post', async function(req, resp) {
    let postData = await methodObject.createPost(req.body);
    resp.send(postData);
})

module.exports = router;