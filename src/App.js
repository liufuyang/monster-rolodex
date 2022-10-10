import {Component} from "react";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // local state
  constructor(props) {
    super(props);

    this.state = {
      name: 'Fuyang'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hi {this.state.name}</p>
          <button>Change Name</button>
        </header>
        <div>
          G1
        </div>
      </div>
    );
  }
}

export default App;
