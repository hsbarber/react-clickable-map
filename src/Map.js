import React, { Component } from "react";
import Paths from "./Paths";

import "./App.css";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "blue",
      id: ""
    };
    this.changeColor = this.changeColor.bind(this);
    //this.stateCheck = this.stateCheck.bind(this);
  }
  changeColor() {
    this.setState({ backgroundColor: "black" });
    console.log(this.state.backgroundColor);
  }
  // stateCheck(id) {
  //   console.log(id);
  //   this.setState({ id });
  // }
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg3919"
        width="999.73236"
        height="679.94141"
        version="1.0"
        sodipodiDocbase="C:\Documents and Settings\Fam. Ventocilla\Mis documentos\{70443084}"
        sodipodiDocname="States_of_Mexico.svg"
      >
        <defs id="defs3922">
          <inkscapePerspective
            sodipodiType="inkscape:persp3d"
            inkscapeVp_x="0 : 339.9707 : 1"
            inkscapeVp_y="0 : 1000 : 0"
            inkscapeVp_z="999.73236 : 339.9707 : 1"
            inkscapePersp3d-origin="499.86618 : 226.64714 : 1"
            id="perspective147"
          />
        </defs>
        <sodipodiNamedview
          inkscapeWindow-height="753"
          inkscapeWindow-width="1280"
          inkscapePageshadow="2"
          inkscapePageopacity="0.0"
          guidetolerance="10.0"
          gridtolerance="10.0"
          objecttolerance="10.0"
          borderopacity="1.0"
          bordercolor="#666666"
          pagecolor="#ffffff"
          id="base"
          inkscapeZoom="0.79142294"
          inkscapeCx="462.09054"
          inkscapeCy="321.03303"
          inkscapeWindow-x="-4"
          inkscapeWindow-y="-4"
          inkscapeCurrent-layer="g3014"
          showgrid="false"
        />
        <g id="g7409" />
        <g id="g3014" className="mapGroup">
          {Paths.map((path, i) => (
            <>
              <path
                key={i}
                id={path.id}
                d={path.d}
                onClick={() => this.props.showText(path.id)}
                className={`list-group-item ${
                  path.id === this.props.id ? "selected" : ""
                }`}
              />
              <h5>{path.tooltip}</h5>
            </>
          ))}
        </g>
      </svg>
    );
  }
}

export default Map;
