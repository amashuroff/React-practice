// import React and ReactDOM libs
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// create React component
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: "Failed to get the position" })
    );
  }

  helper() {
    if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else {
      return <Spinner message="Please accept location request" />;
    }
  }

  render() {
    return <div>{this.helper()}</div>;
  }
}

// take React component, show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
