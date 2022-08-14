import { Component } from 'react';

import NavPanel from '../../sections/nav-panel-section/nav-panel-section';
import AboutSection from '../../sections/about-section/about-section';
import SearchPanel from '../../sections/search-panel-section/search-panel-seaction';
import FilterPanel from '../../sections/filter-panel-section/filter-panel-section';

import './our-coffee-page.css';
import line from '../../../img/line.svg';


class OurCoffee extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <div className="header">
          <NavPanel/>
          <h1 className="page-title">Our coffee</h1>
        </div>
        <AboutSection/>
        <div className="line">
          <img src={line} alt="split line"></img>
        </div>
        <div className="search-and-filter">
          <SearchPanel/>
          <FilterPanel/>
        </div>
      </div>
      
    )
  } 
}

export default OurCoffee;