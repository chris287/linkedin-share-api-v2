import React from 'react'
import '../../public/stylesheets/style.css'

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Snackbar from '@material-ui/core/Snackbar';
import domtoimage from 'dom-to-image'

import SideBar from './SideBar';
import Laurel from './Laurel';
import Header from './Header';
import Menu from './Menu'

var path = require('path')

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openDialog: false,
            imageData: "",
            login: false,
            logInCred: "mocrosoftdev",
            uploadUrl: '',
            asset: '',
            description:'',
            alertMessage: '',
            token:'',
            userId:''
        }
    }

    componentDidMount(){
        var self = this;
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        const auth = fetch('https://lambdazen.roshal.xyz/tni/api/auth',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'code':code
            })
        })
        .then(authResponse=>authResponse.json())
        .then(authJson=>{
            self.setState({token: authJson.access_token})
            return authJson;
        })
        .catch(error=>console.log(error))
        
        auth.then(authData =>{
            fetch('https://lambdazen.roshal.xyz/tni/api/user',{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    'authKey': authData.access_token
                })
            })
            .then(userResponse => {return userResponse.json()})
            .then(userJson => {self.setState({userId: userJson.id});console.log(userJson.id)})
        })
    }

    convertWinnerTableToImage = () => {
        var self = this;
        var node = document.getElementById('winnerTable');
        
        var getNode = domtoimage.toPng(node) //Convert a dom element to PNG
        .then(function(dataUri){
            return dataUri;
        })
        .catch(error=>console.log("Dom to img",error))

        var registerImage = getNode.then(function(imageData){ //register an asset on linkedin 
            return fetch('https://lambdazen.roshal.xyz/tni/api',{
                method: 'POST',
                body: JSON.stringify({
                    'authKey':self.state.token,
                    'personUri': self.state.userId
                })
            })
            .then(function(registerData){
                return registerData.json()
            })
            .then(function(responseJson){
                self.setState({asset: responseJson.value.asset})
                return {
                    'uploadUrl':responseJson.value.uploadMechanism["com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"].uploadUrl,
                    'asset':responseJson.value.asset,
                    'imageData':imageData,
                    'authKey': self.state.token
                }
            })
            .catch(error=>console.log("Register Image",error))
        });

        var uploadImage = registerImage.then(function(registerResponse){ //Upload an image 
            return fetch('https://lambdazen.roshal.xyz/tni/api',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerResponse)
            })
            .then(function(uploadImageResponse){
                return uploadImageResponse.json()
            })
            .then(function(uploadImageJson){
                if(uploadImageJson.size!=undefined){
                    return {
                        'asset':self.state.asset,
                        'description':self.state.description,
                        'authKey':self.state.token
                    } 
                }else{
                    return {
                        'asset':false,
                        'description':false,
                        'authKey': self.state.token
                    }
                }
            })
            .catch(error => console.log(`Upload image error: ${error}`))
        })
        .catch(error=>console.log(error))

        var createPost = uploadImage.then(function(uploadedImageData){ //Create a post with uploaded image

            return fetch('https://lambdazen.roshal.xyz/tni/api/post',{
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    'assetData':self.state.asset,
                    'description': uploadedImageData.description,
                    'authKey': self.state.token,
                    'personUri': self.state.userId
                })
            })
            .then(function(createPostResponse){
                return createPostResponse.json();
            })
            .then(function(createdPostData){
                return createdPostData
            })
            .catch(error => console.log(`Create post error: ${error}`))
        })
        .catch(error=>console.log(`Create post error: ${error}`))

        createPost.then(function(finalResponse){
            if(finalResponse){
                self.setState({alertMessage:'Posted successfully! Please check your timeline.'})
                self.handleDialogOpen();
            }
        })
        .catch(error=> console.log(`Post creation error: ${error}`))

        
    }
    
    handleChange = (event) =>{
        this.setState({
            description: event.target.value
        })
    }

    handleDialogOpen = () =>{
        this.setState({
            openDialog: !this.state.openDialog
        })
    }

    handleSnackBar = () =>{
        this.setState({alertMessage:""})
    }

   render(){
        return(
            <React.Fragment>
                <div className="tniGame">
                    <Header/>
                    <div className="threeColsContainer">
                        <Menu/>
                        <div className="tniMain">
                        <Snackbar anchorOrigin={{vertical:'top', horizontal:'center'}} onClose={this.handleSnackBar} open={this.state.alertMessage!=""} message={this.state.alertMessage} key={"alert1a"} autoHideDuration={3500}/>
                            <div
                                className="winnerContainer"
                                id="winnerTable"
                            >
                                <div
                                    className="honourMentions"
                                >
                                    <div
                                        className="honourCategory"
                                        >
                                            <Laurel imgUrl={"https://lambdazen.roshal.xyz/images/1.jpg"}/>
                                            <div
                                                className="honourCategoryInfo"
                                            >
                                                <span style={{ fontSize: "medium" }}>
                                                <b>Truth Teller</b>
                                                </span>
                                                <span style={{ fontSize: "large" }}>Kathy</span>
                                                <span>Played the max of Truth cards</span>
                                            </div>
                                    </div>
                                    <div
                                        className="honourCategory"
                                    >
                                            <Laurel imgUrl={"https://lambdazen.roshal.xyz/images/2.jpg"}/>
                                            <div
                                               className="honourCategoryInfo"
                                            >
                                                <span style={{ fontSize: "medium" }}>
                                                <b>Insight Digger</b>
                                                </span>
                                                <span style={{ fontSize: "large" }}>Brian</span>
                                                <span>Played max of Insight cards</span>
                                            </div>
                                    </div>
                                    <div
                                        className="honourCategory"
                                        style={{borderRight:"none"}}
                                        >
                                            <Laurel imgUrl={"https://lambdazen.roshal.xyz/images/1.jpg"}/>
                                            <div
                                                className="honourCategoryInfo"
                                            >
                                                <span style={{ fontSize: "medium" }}>
                                                <b>Story Teller</b>
                                                </span>
                                                <span style={{ fontSize: "large" }}>Jerry</span>
                                                <span>Spoke the longest in the game</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        {(this.state.openDialog)?
                            <Dialog open={this.state.openDialog} fullWidth={true}>
                                <DialogTitle>Share Winner Table</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Enter the description below.
                                        </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Description"
                                            fullWidth
                                            value={this.state.description}
                                            onChange={this.handleChange}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={this.handleDialogOpen} color="primary" >
                                        Cancel
                                    </Button>
                                    <Button onClick={this.convertWinnerTableToImage} color="primary" disabled={this.state.description===""}>
                                        Post
                                    </Button>
                                    </DialogActions>
                            </Dialog>:""
                        }
                        <div style={{width:"10%", position:"absolute", right:"10%", bottom:"0"}}>
                            <Button onClick={this.handleDialogOpen}><b style={{fontSize:"large"}}>Share &nbsp;&nbsp;</b><LinkedInIcon fontSize="large"/></Button>
                        </div>
                         
                        </div>
                        <SideBar/>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}