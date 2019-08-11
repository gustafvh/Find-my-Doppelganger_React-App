import React, { Component } from 'react';
import firebase from "../../config/firebase";
import "./UploadImage.scss"

export default class UploadImage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          uploadedFileUrl: ""
        };

    }

    componentDidMount() {

      
    }

    uploadToFirebaseStorage = async (event) => {
      let fileToUpload = event.target.files[0] 
      let refNameInFirebase = firebase.storage().ref('UploadedImages/ppicture.jpg')
      
      const snapshot = await refNameInFirebase.put(fileToUpload);
      const imageUrl = await snapshot.ref.getDownloadURL();

      this.setState({
        uploadedFileUrl: imageUrl
    })

    }

    

    

    render() {
        return (
            <div>
            <div className="upload-file__container">
            <input type="file" accept="image/*" onChange={ (event) => this.uploadToFirebaseStorage(event) }/>
            

            <img src={this.state.uploadedFileUrl} alt=""/>
            <a href={this.state.uploadedFileUrl}>{this.state.uploadedFileUrl}</a>
            </div>
            </div>
        )
    }
}
