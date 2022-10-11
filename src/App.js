import {Component} from "react";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  // local state
  constructor(props) { // Firstly run when App created
    super(props);
    this.state = {
      name: 'Fuyang',
      monsters: [], // initial value
      searchField: '',
    }
    console.log('constructor');
  }

  // lifecycle methods
  componentDidMount() { // Run after render()
    // need data when the component is loaded
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((users) =>
        this.setState(() => { // Will run render() again later
          return {monsters: users, filteredMonsters: users}
        }, () => {
          // console.log(this.state)
        }))
  }

  render() { // Run after constructor
    console.log('render')

    const {name, monsters, searchField} = this.state
    const {onSearchChange} = this;

    let filteredMonsters = monsters
    if (searchField != null) {
      filteredMonsters = monsters.filter((m) => m.name.toLowerCase().includes(searchField.toLowerCase()))
    }

    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hi {name}</p>
        <input className='search-box' type='search' placeholder='Search monsters'
               onChange={
                 // If we define function here, it is created each time it renders
                 // So we define it outside to make it more efficient
                 onSearchChange
               }
        />

        <div>
          {filteredMonsters.map((m) => {
            return <div key={m.id}><h1>{m.name}</h1></div>;
          })}
        </div>

        <button
          onClick={() => {
            // this.state's address needs to change to trigger rerender
            // this.setState({name: 'Andrei'}); // shallow merge, async
            this.setState((_state, _props) => {
              return {name: 'Andrei'}
            }, () => {
              // run after state is set
              console.log("call back: " + this.state.name)
            })
            console.log(this.state.name) // not recommended place to use state
          }}
        > Change Name
        </button>
      </header>
      <div>
        G1
      </div>
    </div>);
  }

  onSearchChange = (event) => {
    let searchField = event.target.value;
    this.setState(() => {
      return {searchField}
    })
  }
}

export default App;
