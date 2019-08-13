import React, { Component } from 'react';
import UploadImageButton from './UploadImageButton.js';
import firebase from "../../config/firebase";
import Environment from "../../config/environment";
import "./LoadingIcon.scss";



import emojis from "../../assets/images/emojis.png";
import ImageWithSettings from './ImageWithSettings/ImageWithSettings.js';

export default class UploadImage extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          uploadedFileUrl: "https://firebasestorage.googleapis.com/v0/b/doppelganger-13149.appspot.com/o/UploadedImages%2Fppicture.jpg?alt=media&token=a17661dc-81e7-4963-a439-d4cf3f39f701",
          uploadingImage: false,
          imageHasUploaded: true,
          imageName: "ppicture.png",
          googleResponse: "efefef",
          similairImagesUrls: ["https://artsemerson.org/ArticleMedia/Images/Pavarotti_TerryONeill12%20tmb.jpg",
          "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10156158373900814",
          "https://pbs.twimg.com/media/DnSazLVW4AA8o_8.jpg:large",
          "https://www.beards.org/home/wp-content/uploads/2011/02/blog_steven008.jpg",
          "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=10156687785081328",
          "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1696703333977968",
          "https://scontent-frx5-1.cdninstagram.com/vp/e6f9b29ec26d96eff5f40771f4018183/5DCBA8A6/t51.2885-15/e35/37000907_264945217616635_8525346577450008576_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com",
          "https://scontent-sin6-1.cdninstagram.com/vp/3a54bf38ae37e388dc9a3b94b36dd1f1/5D88C53C/t51.2885-15/e35/62271630_657504298046633_3179886387727820689_n.jpg?_nc_ht=scontent-sin6-1.cdninstagram.com&se=7&ig…",
          "https://pbs.twimg.com/media/D-xKs_AXkAA8UJf.jpg"
          ]
        };
    }

    uploadToFirebaseStorage = async (event) => {
        this.setState({
            uploadingImage: true
        })
      
      let fileName = event.target.value;
      fileName = fileName.slice(12); 

      let fileToUpload = event.target.files[0]; 
      let refNameInFirebase = firebase.storage().ref('UploadedImages/ppicture.jpg');
      
      const snapshot = await refNameInFirebase.put(fileToUpload);
      const imageUrl = await snapshot.ref.getDownloadURL();

      this.setState({
        uploadedFileUrl: imageUrl,
        uploadingImage: false,
        gettingAPIResponse: false,
        imageHasUploaded: true,
        imageName: fileName
    })}


    submitToCloudVisionAPI = async () => {
        try {
          this.setState({ gettingAPIResponse: true });
          let imageUrl  = this.state.uploadedFileUrl;
          let body = JSON.stringify({
            requests: [
              {
                features: [
                //   { type: "LABEL_DETECTION", maxResults: 10 },
                //   { type: "LANDMARK_DETECTION", maxResults: 5 },
                //   { type: "FACE_DETECTION", maxResults: 5 },
                //   { type: "LOGO_DETECTION", maxResults: 5 },
                //   { type: "TEXT_DETECTION", maxResults: 5 },
                //   { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
                //   { type: "SAFE_SEARCH_DETECTION", maxResults: 5 },
                //   { type: "IMAGE_PROPERTIES", maxResults: 5 },
                //   { type: "CROP_HINTS", maxResults: 5 },
                  { type: "WEB_DETECTION", maxResults: 10 }
                ],
                image: {
                  source: {
                    imageUri: imageUrl
                  }
                }
              }
            ]
          });
          let response = await fetch(
            "https://vision.googleapis.com/v1/images:annotate?key=" +
              Environment["GOOGLE_CLOUD_VISION_API_KEY"],
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              method: "POST",
              body: body
            }
          );
          let responseJson = await response.json();
          
          let similairImagesUrls = [];
          for (let i = 0; i < 9; i++) {
            similairImagesUrls.push(responseJson.responses[0].webDetection.visuallySimilarImages[i].url);
          }


          this.setState({
            googleResponse: responseJson,
            gettingAPIResponse: false,
            similairImagesUrls: similairImagesUrls
            
          });
        } catch (error) {
          console.log(error);
        }
      };

    render() {
        return (
            <div>
            
            {this.state.uploadingImage 
                ? <div className="loading-icon__container"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
                
                : this.state.imageHasUploaded 
                    ? <div>
                        <ImageWithSettings 
                            uploadedFileUrl={this.state.uploadedFileUrl}
                            imageName={this.state.imageName}
                            gettingAPIResponse={this.state.gettingAPIResponse}
                            submitToCloudVisionAPI={this.submitToCloudVisionAPI}
                            googleResponse={this.state.googleResponse}
                            similairImagesUrls={this.state.similairImagesUrls}
                            />
                            
                      </div>
                    : <div>
                        <img height="330px" src={emojis} alt="emojis"/>
                        <UploadImageButton uploadToFirebaseStorage={this.uploadToFirebaseStorage} />
                     </div>}
            
           
            </div>
        )
    }
}
