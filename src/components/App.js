import React from 'react';
import UploadImage from './UploadImage/UploadImage.js';
import "./App.scss";
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div>
      <div className="app__container">
        <Header/>
        <UploadImage/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
