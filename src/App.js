import React from "react";
import "./App.css";

import Particles from "react-particles-js";
import { particleOptions } from "./particle-options";
import Clarifai from "clarifai";

import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import ImageLinkForm from "./components/image-link-form/image-link-form.component";
import ImageCount from "./components/image-count/image-count.component";
import FaceRecognition from "./components/face-recognition/face-recognition.component";

const app = new Clarifai.App({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(Clarifai.COLOR_MODEL, this.state.input)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { imgUrl } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation />
        <Logo />
        <ImageCount />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imgUrl={imgUrl} />
      </div>
    );
  }
}

export default App;
