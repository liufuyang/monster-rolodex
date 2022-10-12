import {Component} from "react";

class CardList extends Component {
  render() {
    const {monsters} = this.props; // *** whenever props change, component re-renders
    console.log("render by CardList")
    return(
      <div>
        {monsters.map((m) => {
          return <div key={m.id}><h1>{m.name}</h1></div>;
        })}
      </div>
    )
  }
}

export default CardList;