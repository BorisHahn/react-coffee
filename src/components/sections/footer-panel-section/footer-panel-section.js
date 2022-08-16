import './footer-panel-section.css';
import logo from '../../../img/black-footer-logo.svg';

const FooterPanel = () => {
  return (
    <ul className="footer__nav-list">
      <img src={logo} alt="logo-img"/>
      <li className="footer__nav-item"><a href={"#"}>Coffee house</a></li>
      <li className="footer__nav-item"><a href={"#"}>Our coffee</a></li>
      <li className="footer__nav-item"><a href={"#"}>For your pleasure</a></li>
    </ul>
  )
}

export default FooterPanel;