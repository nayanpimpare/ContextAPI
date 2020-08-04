import React from "react";
import { MyContext } from "../App";

class Guest extends React.Component {
  render() {
    return (
      <div>
        <p>Guest Component</p>
        <MyContext.Consumer>{data => <h4>{data}</h4>}</MyContext.Consumer>
      </div>
    );
  }
}

export default Guest;
