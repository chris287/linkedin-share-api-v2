# linkedin-share-api-v2
Nodejs app to post images with text description and URLs on authenticated users timeline. It has complete flow from obtaining an access token to creating a post on linkedin.

## Setup and execution
* Clone this repository and install the packages from root folder using ```npm i```
* Setup an application in LinkedIn developers console. https://www.linkedin.com/developers/
* Complete the verification process by sending the verification link to one of the admins of the company/page to which the created application belongs.
* Obtain the ```client_secret``` and ```client_id```
* Navigate to Auth tab and add redirect url. This will be the url of your frontend application to which the user will be redirected after a successfull login.
* Goto products tab and select ```Share On LinkedIn``` and ```Login With LinkedIn``` options. These are the permissions required for the application to do the respective job on behalf of the users.
* Run the server using ```npm start```
* Create a simple web page which will have a signin button that will point to the LinkedIn auth url, ```href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id={CLIENT_ID}&redirect_uri={YOUR_APPLICATION_URI}```
* Proceed with the login process.

## Example 
Use the below CSB link to proceed with the authentication. This url, on successful authentication, points to the nodejs application from where you can post the contents.
https://z6mly.csb.app/
