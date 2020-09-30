require('isomorphic-fetch')
require('dotenv').config()
const { response } = require('express');
var fs = require('fs');

var methods = {
        getUploadStatus: function(upload) {
            console.log(upload.asset)
            var data = fetch(`https://api.linkedin.com/v2/assets/${upload.asset}`, {
                    "headers": {
                        'Authorization': `Bearer ${process.env.TOKEN}`
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
                .catch(err => console.log(err))
            Promise.resolve(data);
            return data;
        },

        registerUpload: function(upload) {
            var data = fetch('https://api.linkedin.com/v2/assets?action=registerUpload', {
                    'method': 'POST',
                    "headers": {
                        'Authorization': `Bearer ${process.env.TOKEN}`,
                        'Content-Type': 'application/json',
                        'Connection': 'Keep-Alive'
                    },
                    body: JSON.stringify({
                        "registerUploadRequest": {
                            "owner": "urn:li:person:Jy5cvnv0Wz",
                            "recipes": [
                                "urn:li:digitalmediaRecipe:feedshare-image"
                            ],
                            "serviceRelationships": [{
                                "identifier": "urn:li:userGeneratedContent",
                                "relationshipType": "OWNER"
                            }],
                            "supportedUploadMechanism": [
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
                .catch(err => console.log(err))
            Promise.resolve(data);
            return data;
        },

        uploadImage: async function(upload) {
                var uploadUrl = upload.uploadUrl;
                var imageData = upload.imageData;
                console.log("UPLOAD IMAGE CALLED")
                try {
                    var headers = new Headers();
                    fs.writeFile('./public/images/image.png', imageData.split(';base64,').pop(), { encoding: 'base64' }, function(err) {
                        if (err) {
                            console.log(`Image conversion error ${err}`)
                        }
                    });

                    const readFile = await fs.promises.readFile('./public/images/image.png')
                    
                    headers.append("Content-Type","mu")
                    headers.append("Authorization",`Bearer ${process.env.TOKEN}`)
                    headers.append("Cookie", "bcookie=\"v=2&06fb2c4a-b88d-4fcf-8de3-adb4b50e14bd\"; lissc=1");

                    var requestOptions = {
                        method: 'PUT',
                        headers: headers,
                        body: readFile,
                        redirect: 'follow'
                    };

                    return fetch(uploadUrl,requestOptions)
                    .then(function(uploadResponse){
                        return JSON.parse(`{"size":${uploadResponse.size},"timeout":${uploadResponse.timeout}}`)
                    })
                    .catch(error => console.log(`Image upload error fetch: ${error}`))
                } catch (error) {
                    console.log(`Image upload error: ${error}`)
                }
                
    },

    authorizeUser: function() {
        var data = fetch('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=868d8qeasvc0rr&redirect_uri=https%3A%2F%2Flambdazen.roshal.xyz%2Ftni&state=fooooobar&scope=r_emailaddress%20r_liteprofile%20w_member_social')
            .then(response => { return response.json() })
            .then(res => { return res })
            .catch(er => console.log(er))
        Promise.resolve(data);
        return data;
    },

    createPost: function(upload) {
        
        var asset = upload.assetData;
        var description = upload.description;
        var data = fetch('https://api.linkedin.com/v2/ugcPosts', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.TOKEN }`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "author": "urn:li:person:Jy5cvnv0Wz",
                    "lifecycleState": "PUBLISHED",
                    "specificContent": {
                        "com.linkedin.ugc.ShareContent": {
                            "shareCommentary": {
                                "text": description
                            },
                            "shareMediaCategory": "IMAGE",
                            "media": [{
                                "status": "READY",
                                "description": {
                                    "text": "LinkedIn API v2 Testing share"
                                },
                                "media": asset,
                                "title": {
                                    "text": "LinkedIn API v2 Testing share"
                                }
                            }]
                        }
                    },
                    "visibility": {
                        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
                    }
                })
            })
            .then(response => {
                return response.json()
            })
            .then(responseId =>(responseId))
            .catch(er => console.log(er))

        return Promise.resolve(data);
    }


}
module.exports = methods