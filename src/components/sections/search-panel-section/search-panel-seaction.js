import { Component } from "react";
import './search-panel-section.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search">
        <p className="search__text">Lookiing for</p>
        <input className="search__input" type="text" placeholder="start typing here..."></input>
      </div>
    )
  }
}

export default SearchPanel;