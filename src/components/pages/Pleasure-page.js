import AboutSection from "../sections/about-section/about-section";
import CoffeeList from "../sections/coffee-list-section/coffee-list-section";
import line from "../../img/line.svg";

const Pleasure = ({ data, info }) => {
  return (
    <div className="wrapper">
      <AboutSection info={info} />
      <div className="line">
        <img src={line} alt="split line"></img>
      </div>
      <CoffeeList data={data} />
    </div>
  );
};

export default Pleasure;
