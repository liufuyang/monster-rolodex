import {useEffect, useState} from "react";

import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";


const App = () => {
  console.log("fun-render")
  // This runs everytime whenever re-renders
  const [searchField, setSearchField] = useState('') // take an initial value, give back 2 things, [value, setValue]
  const [monsters, setMonsters] = useState([])
  const [name, setName] = useState('Fuyang')

  // useEffect(() => {call_back}, [dependency array])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((users) => setMonsters(users)) // every time users is a same array but different pointer in memory, causes re-render
  }, []) // nothing triggers re-calling

  const onSearchChange = (event) => {
    let newSearchField = event.target.value;
    setSearchField((_) => {
      return newSearchField // when this updated, React will re-render
    })
  }

  let filteredMonsters = monsters
  if (searchField != null) {
    filteredMonsters = monsters.filter((m) => m.name.toLowerCase().includes(searchField.toLowerCase()))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={'App-title'}>Monsters Rolodex</h1>

        <img src={logo} className="App-logo" alt="logo"/>
        <SearchBox onChangeHandler={onSearchChange}
                   placeholder='Search monsters'
                   className='search-box'
        />
        <CardList monsters={filteredMonsters}/>

        <p>Hi {name}</p>
        <button
          onClick={() => {
            // this.state's address needs to change to trigger rerender
            // this.setState({name: 'Andrei'}); // shallow merge, async
            setName((_name) => {
              return 'Andrei'
            })
            console.log(this.state.name) // not recommended place to use state
          }}
        > Change Name
        </button>
      </header>
    </div>
  )
}


// class App extends Component {
//   // local state
//   constructor(props) { // *** Firstly run when App created
//     super(props);
//     this.state = {
//       name: 'Fuyang',
//       monsters: [], // initial value
//       searchField: '',
//     }
//     console.log('constructor');
//   }
//
//   // lifecycle methods
//   componentDidMount() { // *** Run after render()
//     // need data when the component is loaded
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then((users) =>
//         this.setState(() => { // Will run render() again later
//           return {monsters: users, filteredMonsters: users}
//         }, () => {
//           // console.log(this.state)
//         }))
//   }
//
//   render() { // *** Run after constructor
//     console.log('render')
//
//     const {name, monsters, searchField} = this.state
//     const {onSearchChange} = this;
//
//     let filteredMonsters = monsters
//     if (searchField != null) {
//       filteredMonsters = monsters.filter((m) => m.name.toLowerCase().includes(searchField.toLowerCase()))
//     }
//
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className={'App-title'}>Monsters Rolodex</h1>
//
//           <img src={logo} className="App-logo" alt="logo"/>
//           <SearchBox onChangeHandler={onSearchChange}
//                      placeholder='Search monsters'
//                      className='search-box'
//           />
//           <CardList monsters={filteredMonsters}/>
//
//           <p>Hi {name}</p>
//           <button
//             onClick={() => {
//               // this.state's address needs to change to trigger rerender
//               // this.setState({name: 'Andrei'}); // shallow merge, async
//               this.setState((_state, _props) => {
//                 return {name: 'Andrei'}
//               }, () => {
//                 // run after state is set
//                 console.log("call back: " + this.state.name)
//               })
//               console.log(this.state.name) // not recommended place to use state
//             }}
//           > Change Name
//           </button>
//         </header>
//       </div>
//     );
//   }
//
//   onSearchChange = (event) => {
//     let searchField = event.target.value;
//     this.setState(() => {
//       return {searchField}
//     })
//   }
// }

export default App;
