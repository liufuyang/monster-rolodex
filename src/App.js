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
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hi {this.state.name}</p>
        <button onClick={() => {
          // this.state's address needs to change to trigger rerender
          // this.setState({name: 'Andrei'}); // shallow merge, async
          this.setState(
            (_state, _props) => {
              return {name: 'Andrei'}
            },
            () => {
              // run after state is set
              console.log("call back: " + this.state.name)
            })
          console.log(this.state.name) // not recommended place to use state
        }}> Change Name
        </button>
      </header>
      <div>
        G1
      </div>
    </div>);
  }
}

export default App;
