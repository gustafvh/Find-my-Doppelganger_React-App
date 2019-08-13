import React, { Component } from 'react';
import "./ImageWithSettings.scss";
import SecondColumn from './SecondColumn.js';

export default class ImageWithSettings extends Component {
    render() {
        return (
        <div>
            <div className="container">
                <div className="first-column">
                    <img className="image" src={this.props.uploadedFileUrl} alt=""/>
                    <a className="image-name" href={this.props.uploadedFileUrl}>{this.props.imageName}</a> 
                </div>
                <SecondColumn submitToCloudVisionAPI={this.props.submitToCloudVisionAPI} gettingAPIResponse={this.props.gettingAPIResponse} googleResponse={this.props.googleResponse} similairImagesUrls={this.props.similairImagesUrls} />
            </div>
        </div>
        )
    }
}
