import "./coffee-item-section.css";

const CoffeeItem = (props) => {
  const { name, country, price, weight, img } = props;
  return (
    <li className="item">
      <img className="item__image" src={img} alt="coffee img"></img>
      <h2 className="item__title">
        {name} Coffee<span className="item__weight"> {weight} kg</span>
      </h2>
      <p className="item__country">{country}</p>
      <p className="item__price">{price}$</p>
    </li>
  );
};

export default CoffeeItem;
