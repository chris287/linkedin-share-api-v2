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

import domtoimage from 'dom-to-image'

import SideBar from './SideBar';
import Laurel from './Laurel';
import Header from './Header';
import Menu from './Menu'


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
            description:''
        }
    }
    convertWinnerTableToImage = () =>{
        var self = this;
        var b64Img = "";
        var node = document.getElementById('winnerTable');
            domtoimage.toPng(node)
            .then(function (dataUrl) {
                b64Img = dataUrl;
                var img = new Image();
                img.src = dataUrl;
                return dataUrl;
            })
            .then(dataUrl=>{
                // REGISTER IMAGE ASSET
                fetch('https://lambdazen.roshal.xyz/tni/api',{
                    method: 'POST',
                    body: JSON.stringify({
                        'key':'value'
                    })
                })
                .then(registerResponse => {
                    return registerResponse.json();
                })
                .then(registerData =>{
                    console.log(registerData,"register Data")
                    return {'uploadUrl':registerData.value.uploadMechanism["com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest"].uploadUrl,'asset':registerData.value.asset}
                })
                .then(uploadData =>{
                    fetch('https://lambdazen.roshal.xyz/tni/api',{
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            'url':dataUrl,
                            'uploadData':uploadData
                        })
                    })
                    .then(uploadDataResponse => {
                        return uploadDataResponse.json()
                    })
                    .then(imageLink => {
                        if(imageLink){
                            fetch('https://lambdazen.roshal.xyz/tni/api/post',{
                                method:'POST',
                                headers: {
                                    'Content-Type':'application/json'
                                },
                                body: JSON.stringify({
                                    'assetData':uploadData,
                                    'description': self.state.description
                                })
                            })
                            .then(postResponse => (postResponse.json()))
                            .then(postFinalResponse => {console.log(postFinalResponse);self.setState(this.handleDialogOpen);window.alert("Image uploaded Successfully! You can check your activity in your profile.")})
                            .catch(erro => console.log(erro))
                        }
                    })
                })
                .catch(error => {console.log(error)})
            })
            .catch(function (error) {
                console.error('Image conversion error! ', error);
            });
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

   render(){
        return(
            <React.Fragment>
                <div className="tniGame">
                    <Header/>
                    <div className="threeColsContainer">
                        <Menu/>
                        <div className="tniMain">
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
                                            <Laurel imgUrl={"https://thumbs.dreamstime.com/b/avatar-girl-short-hair-avatar-face-single-icon-cartoon-style-rater-bitmap-symbol-stock-illustration-web-91848067.jpg"}/>
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
                                            <Laurel imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuEoremt7NhDw5dXxwVT97Kk6lLBdk21r6KQ&usqp=CAU"}/>
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
                                            <Laurel imgUrl={"https://thumbs.dreamstime.com/b/young-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-adult-design-human-people-attractive-casual-guy-100786465.jpg"}/>
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