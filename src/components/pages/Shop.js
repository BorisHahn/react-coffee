import AboutSection from '../sections/about-section/about-section';
import SearchPanel from '../sections/search-panel-section/search-panel-seaction';
import FilterPanel from '../sections/filter-panel-section/filter-panel-section';
import CoffeeList from '../sections/coffee-list-section/coffee-list-section';

import './Shop.css';
import line from '../../img/line.svg';


const Shop = ({ data, filter, onFilterSelect, onUpdateSearch, info }) => {
  return (
    <>
      <div className="wrapper">
        <AboutSection info={info} />
        <div className="line">
          <img src={line} alt="split line"></img>
        </div>
        <div className="search-and-filter">
          <SearchPanel onUpdateSearch={onUpdateSearch} />
          <FilterPanel filter={filter} onFilterSelect={onFilterSelect} />
        </div>
        <CoffeeList data={data} />
      </div>
    </>

  )
}

export default Shop;