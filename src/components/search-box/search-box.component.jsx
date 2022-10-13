import {Component} from "react";

import './search-box.styles.css'

class SearchBox extends Component {

  render() {
    return (
      <input type='search'
             className={this.props.className}
             placeholder={this.props.placeholder}
             onChange={
               // If we define function here, it is created each time it renders
               // So we define it outside to make it more efficient
               this.props.onChangeHandler
             }
      />
    )
  }
}

export default SearchBox;