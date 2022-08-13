import './nav-panel.css';
import logo from '../../img/logo.svg';

const NavPanel = () => {
  return (
      <ul className="nav-list">
        <img src={logo} alt="logo-img"/>
        <li className="nav-item"><a href={"#"}>Coffee house</a></li>
        <li className="nav-item"><a href={"#"}>Our coffee</a></li>
        <li className="nav-item"><a href={"#"}>For your pleasure</a></li>
      </ul>
  )
}

export default NavPanel;