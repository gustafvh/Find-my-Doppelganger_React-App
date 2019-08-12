import React, { Component } from 'react';
import "./NextStepButton.scss";
import smileyIcon from "../../assets/icons/smiley-icon.png";

export default class NextStepButton extends Component {
    render() {
        return (
            <div className="next-step__container">
                <button className="next-step__button cta-button__hover"> Find Doppelganger <img height="20px" style={{marginLeft: "10px"}} alt="upload icon" src={smileyIcon}/></button>
            </div>
        )
    }
}
