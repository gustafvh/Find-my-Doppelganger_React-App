import React, { Component } from 'react';
import UploadImageButton from './UploadImageButton.js';
import firebase from "../../config/firebase";
import "./LoadingIcon.scss";
import NextStepButton from "./NextStepButton.js";


import emojis from "../../assets/images/emojis.png";
import ImageWithSettings from './ImageWithSettings.js';

export default class UploadImage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          uploadedFileUrl: "https://firebasestorage.googleapis.com/v0/b/doppelganger-13149.appspot.com/o/UploadedImages%2Fppicture.jpg?alt=media&token=26fbe341-aa46-41fd-8eac-69af6b4a20b2",
          loading: false,
          imageHasUploaded: true,
          imageName: "ppicture.png"
        };
    }

    uploadToFirebaseStorage = async (event) => {
        this.setState({
            loading: true
        })
      
      let fileName = event.target.value;
      fileName = fileName.slice(12); 

      let fileToUpload = event.target.files[0]; 
      let refNameInFirebase = firebase.storage().ref('UploadedImages/ppicture.jpg');
      
      const snapshot = await refNameInFirebase.put(fileToUpload);
      const imageUrl = await snapshot.ref.getDownloadURL();

      this.setState({
        uploadedFileUrl: imageUrl,
        loading: false,
        imageHasUploaded: true,
        imageName: fileName
    })

    }

    render() {
        return (
            <div>
            
            {this.state.loading 
                ? <div className="loading-icon__container"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
                
                : this.state.imageHasUploaded 
                    ? <div>
                        <ImageWithSettings 
                            uploadedFileUrl={this.state.uploadedFileUrl}
                            imageName={this.state.imageName}
                            />
                            <NextStepButton/>
                      </div>
                    : <div>
                        <img height="330px" src={emojis} alt="emojis"/>
                        <UploadImageButton uploadToFirebaseStorage={this.uploadToFirebaseStorage} />
                     </div>}
            
           
            </div>
        )
    }
}
