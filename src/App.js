import React from "react";
import "./App.css";
import { Button } from "semantic-ui-react";
import MyContainer from "./Container";
import Clock from "./Clock";
import Data from "./Data";
import Demo from "./Demo"

class App extends React.Component {

  state = { showClock: false, showData: false };

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  };

  toggleData = () => {
    this.setState({
      showData: !this.state.showData,
    });
  };


  render() {
    return (
      <MyContainer>
        {this.state.showClock && <Clock />}
        <Button onClick={this.toggleClock}>toggle clock</Button>

        {this.state.showData && <Data />}
        <Button onClick={this.toggleData}>toggle data</Button>
        <Demo/>
      </MyContainer>
    );
  }
}

export default App;