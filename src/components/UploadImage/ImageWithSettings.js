import React, { Component } from 'react';
import "./ImageWithSettings.scss";

export default class ImageWithSettings extends Component {
    render() {
        return (
        <div>
            <div className="container">
                <div className="first-column">
                    <img className="image" src={this.props.uploadedFileUrl} alt=""/>
                    <a className="image-name" href={this.props.uploadedFileUrl}>{this.props.imageName}</a> 
                </div>

            <div className="second-column">
                <h4>Search for doppelgangers from:</h4>
                <div className="settings-option__container">
                    <p className="settings-option">Everyone</p>
                    <p className="settings-option">Celebrities</p>
                </div>
            </div>
            
            </div>
        </div>
        )
    }
}
