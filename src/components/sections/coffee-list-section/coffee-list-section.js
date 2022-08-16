import CoffeeItem from "../coffee-item-section/coffee-item-section"
import './coffee-list-section.css';

const CoffeeList = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    
      return (
          <CoffeeItem key={id} {...itemProps}/>
      )
  })
  const emptyMessage = <div>Нет данных</div>
  const isEmpty = elements.length === 0;
  return (
    <ul className="list">
      {isEmpty ? emptyMessage : elements}
    </ul>
  )
}
export default CoffeeList;