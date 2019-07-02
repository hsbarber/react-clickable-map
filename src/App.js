import React, { Component } from "react";
import logo from "./logo.svg";
import Map from "./Map";
import InfoBox from "./infobox";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ""
    };
    this.showText = this.showText.bind(this);
  }
  showText(id) {
    console.log(id);
    this.setState({ id });
  }
  render() {
    return (
      <div className="App">
        <div className="map">
          <section className="mapText">
            <h3>Map</h3>
            <h4>
              The map on the right allows you to click on each Mexican state and
              learn about what time of folk art is produced there.
            </h4>
            <InfoBox id={this.state.id} />
            {/* {findText.map(text => (
              <div>
                <h4>{text.name}</h4>
                <p>{text.d}</p>
              </div>
            ))} */}
          </section>
          <Map showText={this.showText} id={this.state.id} />
        </div>
      </div>
    );
  }
}

export default App;
