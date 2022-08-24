import { Component } from 'react';
import coffeeImg from '../img/coffee-card.png';

import cupImg from '../img/cup.png';
import girlImg from '../img/girl.png';

import './app.css';
import '../fonts/fonts.css';
import Shop from './pages/Shop';
import Home from './pages/Home-page';
import Pleasure from './pages/Pleasure-page';
import About from './pages/About-page';
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout';


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
        filter: 'All',
        term: '',
    }
  }

  onFilterSelect = (filter) => {
    this.setState({
      filter: filter
    })
  }

  filterEmp = (items, filter) => {
    switch(filter) {
      case 'Brasil':
        return items.filter(item => item.country === filter);
      case 'Kenya':
        return items.filter(item => item.country === filter);
      case 'Columbia':
        return items.filter(item => item.country === filter);
      default:
        return items;
    }
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
    const visibleData = this.filterEmp(this.searchEmp(data, term), filter);

    const aboutBeans = { 
      title: 'About our beans',
      img: girlImg,
      firstText: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
      secondText: 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.'
    };
  
    const aboutGoods = { 
      title: 'About our goods',
      img: cupImg,
      firstText: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
      secondText: 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.'
    };
    
    return (
      <div className="app">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop data={visibleData} filter={filter} onFilterSelect={this.onFilterSelect} onUpdateSearch={this.onUpdateSearch} info={aboutBeans}/>} />
            <Route path="shop/:id" element={<About data={visibleData}/>} />
            <Route path="pleasure" element={<Pleasure data={visibleData} info={aboutGoods}/>} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;


