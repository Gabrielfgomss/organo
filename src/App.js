import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
 
function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA',
    },
    {
      nome: 'Back-End',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278',
    },
    {
      nome: 'Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157',
    },
  ]

  const [programadores, setProgramadores] = useState([]);

  const aoNovoProgramadorAdicionado = (programador) => {
    setProgramadores([...programadores, programador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)}
      aoProgramadorCadastrado={programador => (aoNovoProgramadorAdicionado(programador))}>
      </Formulario>
      {times.map(time => 
        <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        programadores={programadores.filter(programador => programador.time === time.nome)}/>)}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
