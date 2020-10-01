require('isomorphic-fetch')
require('dotenv').config()


// docs - https://docs.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/share-on-linkedin#create-an-image-share

var methods = {
        getUploadStatus: function(upload) {
            return fetch(`https://api.linkedin.com/v2/assets/${upload.asset}`, {
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
                    return res;
                })
                .catch(err => console.log(err))
        },

        registerUpload: function(upload) {
            return fetch('https://api.linkedin.com/v2/assets?action=registerUpload', {
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
                    return res;
                })
                .catch(err => console.log(err))
        },

        uploadImage: async function(upload) {
                var uploadUrl = upload.uploadUrl;
                var imageData = upload.imageData;

                try {
                    var headers = new Headers();

                    const img = Buffer.from(imageData.split(";base64,").pop(),"base64")
                    headers.append("Content-Type","mu")
                    headers.append("Authorization",`Bearer ${process.env.TOKEN}`);
                    headers.append("Cookie", "bcookie=\"v=2&06fb2c4a-b88d-4fcf-8de3-adb4b50e14bd\"; lissc=1");
                    
                    var requestOptions = {
                        method: 'PUT',
                        headers: headers,
                        body: img,
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
        return fetch('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=868d8qeasvc0rr&redirect_uri=https%3A%2F%2Flambdazen.roshal.xyz%2Ftni&state=fooooobar&scope=r_emailaddress%20r_liteprofile%20w_member_social')
            .then(response => { return response.json() })
            .then(res => { return res })
            .catch(er => console.log(er))
        
    },

    createPost: function(upload) {
        
        var asset = upload.assetData;
        var description = upload.description;
        return fetch('https://api.linkedin.com/v2/ugcPosts', {
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
    }

}
module.exports = methods