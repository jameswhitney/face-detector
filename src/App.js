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
import SignIn from "./components/sign-in/sign-in.component";
import Register from "./components/register/register.component";

const app = new Clarifai.App({
  apiKey: `${process.env.REACT_APP_API_KEY}`,
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      boxes: [],
      route: "signIn",
      isSignedIn: false,
    };
  }

  calculateFaceLocation = (data) => {
    return data.outputs[0].data.regions.map((face) => {
      const clarifaiResponse = face.region_info.bounding_box;
      const image = document.getElementById("image-input");
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        topRow: clarifaiResponse.top_row * height,
        rightCol: width - clarifaiResponse.right_col * width,
        bottomRow: height - clarifaiResponse.bottom_row * height,
        leftCol: clarifaiResponse.left_col * width,
      };
    });
  };

  displayBoundingBox = (box) => {
    this.setState({ boxes: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayBoundingBox(this.calculateFaceLocation(response))
      )
      .catch(() => console.log("oops"));
  };

  onRouteChange = (route) => {
    if (route === "signOut") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignedIn, route, imgUrl, boxes } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particleOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <React.Fragment>
            <Logo />
            <ImageCount />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition boxes={boxes} imgUrl={imgUrl} />
          </React.Fragment>
        ) : route === "signIn" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
