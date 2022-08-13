import { Component } from 'react';

import './app.css';
import '../fonts/fonts.css';
import OurCoffee from './pages/our-coffee/our-coffee-page';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {
              name: 'Aromistico Coffee',
              country: 'Brasil',
              price: 6.99,
              weight: 1,
              img: '../../img/coffee-card.png',
                },
            {
              name: 'Aromistico Coffee',
              country: 'Columbia',
              price: 4.99,
              weight: 1,
              img: '../../img/coffee-card.png',
            },
            {
              name: 'Aromistico Coffee',
              country: 'Kenia',
              price: 7.99,
              weight: 1,
              img: '../../img/coffee-card.png',
            },
            {
              name: 'Aromistico Coffee',
              country: 'Peru',
              price: 9.99,
              weight: 1,
              img: '../../img/coffee-card.png',
            },
        ],
            page: 'main'
        
    }
  }
  render() {
    return (
      <div className="app">
        <OurCoffee/>
      </div>
    );
  }
}

export default App;


