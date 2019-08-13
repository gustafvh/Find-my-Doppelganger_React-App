import React, { Component } from 'react';
import "../LoadingIcon.scss";
import smileyIcon from "../../../assets/icons/smiley-icon.png";
import "./SecondColumn.scss";

export default class SecondColumn extends Component {

    renderSimilairImages = (arrayWithUrls) => {

        

        return (
        <div className="rendered-images__container">
                {arrayWithUrls.map((singleImageUrl) => <img className="rendered-images__single-image" onError={e => e.target.style.display = 'none'} src={singleImageUrl} alt={singleImageUrl}/>)}

                
            </div> );


    }


    render() {
        return (
            <div className="second-column">
            
            {this.props.gettingAPIResponse 
                ? <div className="loading-icon__container"><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>
            : this.props.googleResponse === undefined 
            ? <div>
                <h4>Search for Doppelgangers</h4>
                <p>We will now try to find your Doppelgangers that may lurk around the internet, and this is based on your <span style={{fontWeight: "bold"}}>most prominent features</span>, like a beard, hair-color etc. This search includes most of the images that Google has indexed (which was already at 10 billion since 2010). </p>
                    {/*
                    <h4>Search for doppelgangers from:</h4>
                    <div className="settings-option__container">
                        <p className="settings-option">Everyone</p>
                        <p className="settings-option">Celebrities</p>
                    </div>
                    */}
                    <div className="next-step__container">
                <button onClick={this.props.submitToCloudVisionAPI} className="next-step__button cta-button__hover"> Find Doppelganger <img height="20px" style={{marginLeft: "10px"}} alt="upload icon" src={smileyIcon}/></button>
            </div>    
            </div> 
            : <div> 
            {this.renderSimilairImages(this.props.similairImagesUrls)}
                </div>}
            </div>
        )
    }
}
