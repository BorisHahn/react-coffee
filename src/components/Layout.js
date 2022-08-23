import { NavLink, Outlet, useLocation} from 'react-router-dom'
import logo from '../img/logo.svg';
import logoBlack from '../img/black-footer-logo.svg';
import logoBlackLines from '../img/footer-logo.svg';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const className = `header ${getHeaderImg(location.pathname)}`;
  console.log(location.pathname, className);
  return (
  <>
    <div id="wrap">
      <div className={className}>
        <div className="nav-list">
          <img src={logo} alt="logo-img"/>
          <NavLink className="nav-item" to="/">Coffee house</NavLink>
          <NavLink className="nav-item" to="/shop">Our coffee</NavLink>
          <NavLink className="nav-item" to="/pleasure">For your pleasure</NavLink>
        </div>
        <h1 className="header__title">Our coffee</h1>
      </div>
      
      <Outlet className="main"/>
      
      <div className="footer">
        <div className="footer__nav-list">
          <img src={logoBlack} alt="logo-img"/>
          <NavLink className="footer__nav-item" to="/">Coffee house</NavLink>
          <NavLink className="footer__nav-item" to="/shop">Our coffee</NavLink>
          <NavLink className="footer__nav-item" to="/pleasure">For your pleasure</NavLink>
        </div>
        <img className="footer__logo" src={logoBlackLines} alt="footer logo"></img>
      </div>
    </div>
  </>
  )
}

function getHeaderImg(pathname) {
  switch (pathname) {
    case '/shop':
      return 'header__background_shop';
    case '/pleasure':
      return 'header__background_pleasure';
    default: 
      return 'dummy';
  }
}

export default Layout;