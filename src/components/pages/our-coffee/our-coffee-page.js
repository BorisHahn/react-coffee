
import NavPanel from '../../sections/nav-panel-section/nav-panel-section';
import AboutSection from '../../sections/about-section/about-section';
import SearchPanel from '../../sections/search-panel-section/search-panel-seaction';
import FilterPanel from '../../sections/filter-panel-section/filter-panel-section';
import CoffeeList from '../../sections/coffee-list-section/coffee-list-section';
import FooterPanel from '../../sections/footer-panel-section/footer-panel-section';
import './our-coffee-page.css';
import line from '../../../img/line.svg';
import footerLogo from '../../../img/footer-logo.svg';

const OurCoffee = ({data, filter, onFilterSelect, onUpdateSearch}) => {
  return (
    <div>
      <div className="header">
        <NavPanel/>
        <h1 className="header__title">Our coffee</h1>
      </div>
      <AboutSection/>
      <div className="line">
        <img src={line} alt="split line"></img>
      </div>
      <div className="search-and-filter">
        <SearchPanel onUpdateSearch={onUpdateSearch}/>
        <FilterPanel filter={filter} onFilterSelect={onFilterSelect}/>
      </div>
      <CoffeeList data={data}/>
      <div className="footer">
        <FooterPanel/>
        <img className="footer__logo" src={footerLogo} alt="footer logo"></img>
      </div>
    </div>
  )
}

export default OurCoffee;