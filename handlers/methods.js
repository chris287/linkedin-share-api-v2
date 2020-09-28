require('isomorphic-fetch')
require('dotenv').config()
var fs = require('fs');
var FormData = require('form-data');

var methods = {
    getUploadStatus: function(upload){
        console.log(upload.asset)
        var data = fetch(`https://api.linkedin.com/v2/assets/${upload.asset}`,{
            "headers":{
                'Authorization':`Bearer ${process.env.TOKEN}`
              }
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(res => {
            // data.push(res)
            // console.log(data,"Data")
            return res;
        })
        .catch(err=>console.log(err))
        Promise.resolve(data);
        return data;
    },

    registerUpload: function(upload){
        var data = fetch('https://api.linkedin.com/v2/assets?action=registerUpload',{
            'method':'POST',
            "headers":{
                'Authorization':`Bearer ${process.env.TOKEN}`,
                'Content-Type':'application/json',
                'Connection':'Keep-Alive'
            },
            body:JSON.stringify({
                "registerUploadRequest":{
                   "owner":"urn:li:person:rfMZBdLqzf",
                   "recipes":[
                      "urn:li:digitalmediaRecipe:feedshare-image"
                   ],
                   "serviceRelationships":[
                      {
                         "identifier":"urn:li:userGeneratedContent",
                         "relationshipType":"OWNER"
                      }
                   ],
                   "supportedUploadMechanism":[
                      "SYNCHRONOUS_UPLOAD"
                   ]
                }
             })
        })
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(res => {
            // data.push(res)
            // console.log(data,"Data")
            return res;
        })
        .catch(err=>console.log(err))
        Promise.resolve(data);
        return data;
    },

    uploadImage: function(upload){
        var dataUrl = upload.url;
        var uploadData = upload.uploadData;
        var file = decodeURIComponent(uploadData)
        var form = new FormData();
        form.append('image',file)
        
        
        // UPLOAD IMAGE 
                    fetch(uploadData.uploadUrl,{
                        method: 'POST',
                        headers:{
                            'Content-Type':'application/binary',
                            'Authorization':`Bearer ${process.env.TOKEN}`
                        },
                        body: form
                    })
                    .then(uploadResponse =>{
                        console.log("UPLOAD RESPONSE")
                        return uploadResponse
                    })
                    .then(location => {
                        console.log(location,"location")
                        return location
                    })
                    .catch(error =>{console.log(error)})
        return true;
    },

    authorizeUser: function(){
        var data = fetch('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=868d8qeasvc0rr&redirect_uri=https%3A%2F%2Flambdazen.roshal.xyz%2Ftni&state=fooooobar&scope=r_emailaddress%20r_liteprofile%20w_member_social')
        .then(response => {return response.json()})
        .then(res => {return res})
        .catch(er => console.log(er))
        Promise.resolve(data);
        return data;
    }
}

function DataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',')
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i)

    return new Blob([ia], { type: mimeString })
  }


module.exports = methods