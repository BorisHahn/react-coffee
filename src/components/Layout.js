import { NavLink, Outlet, useLocation, matchPath} from 'react-router-dom'
import logo from '../img/logo.svg';
import headerLogo from '../img/header-logo-white.svg';
import logoBlack from '../img/black-footer-logo.svg';
import logoBlackLines from '../img/footer-logo.svg';
import './Layout.css';



const Layout = () => {
  
  const location = useLocation();
  let className = `header `;
  let titleText = '';
  
  if (matchPath(process.env.PUBLIC_URL + '/shop/:id', location.pathname) ||
      matchPath(process.env.PUBLIC_URL + '/shop', location.pathname)) {
    className += 'header__background_shop';
    titleText += 'Our coffee';
  }
  else if (matchPath(process.env.PUBLIC_URL + '/pleasure', location.pathname)) {
    className += 'header__background_pleasure';
    titleText += 'For your pleasure';
  }
  else if (matchPath(process.env.PUBLIC_URL + '/', location.pathname)) {
    className += 'header__background_main';
    titleText += 'Everything You Love About Coffee';
  }
  
  const headerMainText = (
    <div className='header__inner'>
      <img src={headerLogo} alt='header white logo'></img>
      <h3>We makes every day full of energy and taste</h3>
      <h3>Want to try our beans?</h3>
      <button className='button header__inner__button'>More</button>
    </div>
    
    
  );

  return (
  <>
    <div id='wrap'>
      <div className={className}>
        <div className='nav-list'>
          <img src={logo} alt='logo-img'/>
          <NavLink className='nav-item' to={process.env.PUBLIC_URL + '/'}>Coffee house</NavLink>
          <NavLink className='nav-item' to='shop'>Our coffee</NavLink>
          <NavLink className='nav-item' to='pleasure'>For your pleasure</NavLink>
        </div>
        <h1 className='header__title'>{titleText}</h1>
        {matchPath(process.env.PUBLIC_URL + '/', location.pathname) && headerMainText}
      </div>
      
      <Outlet className='main'/>
      
      <div className='footer'>
        <div className='footer__nav-list'>
          <img src={logoBlack} alt='logo-img'/>
          <NavLink className='footer__nav-item' to='/'>Coffee house</NavLink>
          <NavLink className='footer__nav-item' to='shop'>Our coffee</NavLink>
          <NavLink className='footer__nav-item' to='pleasure'>For your pleasure</NavLink>
        </div>
        <img className='footer__logo' src={logoBlackLines} alt='footer logo'></img>
      </div>
    </div>
  </>
  )
}

export default Layout;