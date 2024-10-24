import {useState} from 'react';
import './Filtro.css';

function Filtro(props) {
  const changeHandler = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div className="filtro-item">
      <label className="filtro-label">Filtrar por ano</label>
      <select className="filtro-select" value={props.selected} onChange={changeHandler}>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
}

export default Filtro;
