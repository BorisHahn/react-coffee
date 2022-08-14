import { Component } from "react";
import './filter-panel-section.css';

const FilterPanel = () => {
  const buttonsData = [
    {name: "All", label: "All"},
    {name: "Brasil", label: "Brasil"},
    {name: "Kenya", label: "Kenya"},
    {name: "Columbia", label: "Columbia"},
  ]
  const buttons = buttonsData.map(({name, label}) => {
    return (
      <button className="filter__button" type="button" key={name}>{label}</button>
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