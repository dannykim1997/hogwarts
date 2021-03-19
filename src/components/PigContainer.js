import React, { Component } from "react";
import HogTile from "./HogTile"

class PigContainer extends Component {
  
  
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogsData.map((hog) => <HogTile hogDetails={hog}/>)}
      </div>
    );
  }
}

export default PigContainer;
