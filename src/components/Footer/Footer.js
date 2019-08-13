import React, { Component } from 'react';
import "./Footer.scss";



export default class Footer extends Component {
    render() {
        return (
            <div className="footer__container">
            
            
            <p className="footer-steps__container">
                <span className={this.props.currentStep === 1  ? "active-step" : ""}>Upload</span> -
                <span className={this.props.currentStep === 2  ? "active-step" : ""}> Compare</span>
            </p>
            <a className="footer_small-text" href="https//halco.se">Coded by Gustaf Halvardsson</a>
            
        </div>
        )
    }
}

