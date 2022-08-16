import CoffeeItem from "../coffee-item-section/coffee-item-section"
import './coffee-list-section.css';

const CoffeeList = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    
      return (
          <CoffeeItem key={id} {...itemProps}/>
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