import './search-box.styles.css'
import {ChangeEventHandler} from "react";

//interface ISearchBoxProps{
//    className: string;
//    placeholder?: string; // ? is nullable
//}
//
//interface ISearchBoxProps { // overloading the above one
//    onChangeHandler: (a: string) => string
//}

// Types can be unioned to create a "one of" effect
type SearchBoxPropx = {
    className: string;
    placeholder?: string; // ? is nullable
    onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxPropx) =>
    (
        <input type='search'
               className={className}
               placeholder={placeholder}
               onChange={
                   // If we define function here, it is created each time it renders
                   // So we define it outside to make it more efficient
                   onChangeHandler
               }
        />
    )


// class SearchBox extends Component {
//   render() {
//     return (
//       <input type='search'
//              className={this.props.className}
//              placeholder={this.props.placeholder}
//              onChange={
//                // If we define function here, it is created each time it renders
//                // So we define it outside to make it more efficient
//                this.props.onChangeHandler
//              }
//       />
//     )
//   }
// }

export default SearchBox;