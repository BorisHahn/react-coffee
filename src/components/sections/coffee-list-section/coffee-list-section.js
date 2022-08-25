import CoffeeItem from "../coffee-item-section/coffee-item-section"
import './coffee-list-section.css';
import { NavLink } from 'react-router-dom'

const CoffeeList = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    
      return (
        <NavLink className="coffee-link" key={id} to={process.env.PUBLIC_URL + `/shop/${id}`}><CoffeeItem {...itemProps}/></NavLink>
      )
  })
  const emptyMessage = 
    <div className="empty-plag">
      <p className="empty-plag__text">Nothing found for your request...</p>
    </div>
  const isEmpty = elements.length === 0;
  return (
    <ul className="list">
      {isEmpty ? emptyMessage : elements}
    </ul>
  )
}
export default CoffeeList;