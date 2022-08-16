import { Component } from 'react';
import coffeeImg from '../img/coffee-card.png';

import './app.css';
import '../fonts/fonts.css';
import OurCoffee from './pages/our-coffee/our-coffee-page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {
              name: 'Egoiste',
              country: 'Kenya',
              price: 6.99,
              weight: 1,
              img: coffeeImg,
              id: 1,
                },
            {
              name: 'UCC',
              country: 'Brasil',
              price: 4.99,
              weight: 1,
              img: coffeeImg,
              id: 2,
            },
            {
              name: 'Jardin',
              country: 'Kenya',
              price: 7.99,
              weight: 1,
              img: coffeeImg,
              id: 3,
            },
            {
              name: 'Hausbrandt',
              country: 'Brasil',
              price: 9.99,
              weight: 1,
              img: coffeeImg,
              id: 4,
            },
            {
              name: 'Lucaffe',
              country: 'Columbia',
              price: 11.99,
              weight: 2,
              img: coffeeImg,
              id: 5,
            },
            {
              name: 'Aromistico',
              country: 'Kenya',
              price: 12.99,
              weight: 2,
              img: coffeeImg,
              id: 6,
            },
        ],
        page: 'main',
        filter: 'All',
        term: '',
    }
  }
  onFilterSelect = (filter) => {
    this.setState({
      filter: filter
    })
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  render() {
    const {data, filter, term} = this.state;
    const visibleData = this.searchEmp(data, term);
    let page = (<OurCoffee data={visibleData}
                          filter={filter}
                          onFilterSelect={this.onFilterSelect}
                          onUpdateSearch={this.onUpdateSearch}/>);
    return (
      <div className="app">
        {page}
      </div>
    );
  }
}

export default App;


