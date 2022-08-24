import { useParams, NavLink } from "react-router-dom";


const About = ({data}) => {
  const {id} = useParams();
  const card = data.find(item => item.id === parseInt(id));
  
  return (
    <div>
        <NavLink to="/shop"><button type="button" className="return">Return</button></NavLink>
        {card.name}
    </div>
  )
}

export default About;