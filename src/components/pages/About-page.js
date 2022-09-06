import { useParams, NavLink } from "react-router-dom";
import "./About-page.css";
import logoBlack from "../../img/footer-logo.svg";

const About = ({ data }) => {
  const { id } = useParams();
  const card = data.find((item) => item.id === parseInt(id));
  return (
    <div className="info">
      <NavLink to={"/shop"}>
        <button type="button" className="button info__button">
          Return to shop
        </button>
      </NavLink>
      <div className="info__blocks">
        <div
          className="info__block-img"
          style={{ backgroundImage: `url("${card.img}")` }}
        ></div>
        <div className="info__block-text">
          <h1 className="info__block-text__title">About it</h1>
          <img
            className="info__block-text__logo"
            src={logoBlack}
            alt="logo"
          ></img>
          <p className="info__block-text__country">
            <b>Country:</b> {card.country}
          </p>
          <p className="info__block-text__weight">
            <b>Weight:</b> {card.weight} kg
          </p>
          <p className="info__block-text__description">
            <b>Description:</b> {card.description}
          </p>
          <p className="info__block-text__price">
            <b>price:</b> {card.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
