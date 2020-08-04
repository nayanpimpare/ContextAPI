import React from "react";
import Guest from "./Guest";

class User extends React.Component {
  render() {
    return (
      <div>
        User Component
        <Guest />
      </div>
    );
  }
}

export default User;
