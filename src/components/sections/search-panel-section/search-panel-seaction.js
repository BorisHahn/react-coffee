import { Component } from "react";
import './search-panel-section.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({
      term: term
    });
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <div className="search">
        <p className="search__text">Lookiing for</p>
        <input className="search__input"
          type="text"
          placeholder="start typing here..."
          value={this.state.term}
          onChange={this.onUpdateSearch}></input>
      </div>
    )
  }
}

export default SearchPanel;