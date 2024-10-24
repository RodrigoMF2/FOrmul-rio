import './App.css';
import NovaDisciplina from './NovaDisc';
import Disciplinas from './components/Disciplinas';
import Filtro from './components/Filtro';
import { useState } from 'react';

import { NOTAS_DISCIPLINAS } from './components/data';


function App() {
  

  const [dadosDisciplinas, setdadosDisciplina] = useState(NOTAS_DISCIPLINAS);
  const [anoFiltrado,setAnoFiltrado] = useState('2022');

  const onAddDisciplinasHandler = (disciplinas) => {
    setdadosDisciplina((prevState) => {
      return[disciplinas, ...prevState]
    })
  }

  const filterChangeHandler = (selectedYear) =>{
    setAnoFiltrado(selectedYear)
  }

  const disciplinasFiltradas = dadosDisciplinas.filter((disciplinas) =>{
    return disciplinas.dataAvalia.getFullYear().toString() === anoFiltrado;
  });

  return (
    
    <div>
      <NovaDisciplina onaddDisciplinas={onAddDisciplinasHandler}/>
      <Filtro selected={anoFiltrado} onFilterChange={filterChangeHandler} />
      <Disciplinas listaDisciplinas={disciplinasFiltradas} />
    </div>
      
    
  );
}

export default App;
