import React from "react";
import "./styles.css";
import User from "./component/User";
export const MyContext = React.createContext();

class App extends React.Component {
  state = {
    name: "Nayan"
  };
  render() {
    return (
      <div className="App">
        <MyContext.Provider value={this.state.name}>
          <User />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
