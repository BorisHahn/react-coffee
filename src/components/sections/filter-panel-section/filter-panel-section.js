
import './filter-panel-section.css';

const FilterPanel = (props) => {
  const buttonsData = [
    { name: "All", label: "All" },
    { name: "Brasil", label: "Brasil" },
    { name: "Kenya", label: "Kenya" },
    { name: "Columbia", label: "Columbia" },
  ]
  const { filter } = props;
  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active && "button_active";
    return (
      <button className={`button ${clazz}`}
        type="button" key={name}
        onClick={() => props.onFilterSelect(name)}>{label}</button>
    )
  })
  return (
    <div className="filter">
      <p className="filter__text">Or filter</p>
      <div className="filter__buttons">
        {buttons}
      </div>
    </div>
  )
}

export default FilterPanel;