import React from "react";
import "./App.css";

import Particles from "react-particles-js";

import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import ImageLinkForm from "./components/image-link-form/image-link-form.component";
import ImageCount from "./components/image-count/image-count.component";

import { particleOptions } from "./particle-options";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <ImageCount />
        <ImageLinkForm />
        {/* 
      
      <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
