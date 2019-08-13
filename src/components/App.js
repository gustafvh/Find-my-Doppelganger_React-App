import UploadImage from './UploadImage/UploadImage.js';
import "./App.scss";
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

import "normalize.css/normalize.css"; //NP, Resettar alla browsers default grejer

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1
    };
  };

  changeCurrentStep = (stepToChangeTo) => {
    this.setState({
      currentStep: stepToChangeTo
    })
  }

  render() {
  return (
    <div>
      <div className="app__container">
        <Header/>
        <UploadImage/>
        <Footer changeCurrentStep={this.changeCurrentStep} currentStep={this.state.currentStep} />
      </div>
    </div>
  );
}
}

