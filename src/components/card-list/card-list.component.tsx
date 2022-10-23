import './card-list.styles.css'
import '../card/card.styles.css'
import Card from "../card/card.component";
import {Monster} from "../../App";

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({monsters}: CardListProps) => {
  console.log("render by CardList")
  return (
    <div className='card-list'>
      {monsters.map((m) => {
        return (
          <Card key={m.id} monster={m}/>
        )
      })}
    </div>
  )
}

// class CardList extends Component {
//   render() {
//     const {monsters} = this.props; // *** whenever props change, component re-renders
//     console.log("render by CardList")
//     return (
//       <div className='card-list'>
//         {monsters.map((m) => {
//           return (
//             <Card monster={m}/>
//           )
//         })}
//       </div>
//     )
//   }
// }

export default CardList;