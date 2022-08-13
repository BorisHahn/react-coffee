import { Component } from 'react';

import NavPanel from '../../sections/nav-panel-section/nav-panel-section';
import AboutSection from '../../sections/about-section/about-section';


class OurCoffee extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <div className='header'>
          <NavPanel/>
          <h1 className='page-title'>Our coffee</h1>
        </div>
        <AboutSection/>
      </div>
      
    )
  } 
}

export default OurCoffee;