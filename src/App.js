import { useState, useEffect } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

 const [times, setTimes] = useState(() => {
    const lista = localStorage.getItem('times');
    const listaDeTimes = JSON.parse(lista);
    
    return listaDeTimes || [
      {
        id: uuidv4(),
        nome: 'Front-End',
        cor: '#82CFFA',
      },
      {
        id: uuidv4(),
        nome: 'Back-End',
        cor: '#57C278',
      },
      {
        id: uuidv4(),
        nome: 'Design',
        cor: '#DB6EBF',
      },
      {
        id: uuidv4(),
        nome: 'Mobile',
        cor: '#FFBA05',
      },
      {
        id: uuidv4(),
        nome: 'Data Science',
        cor: '#A6D157',
      }
    ];
  })

  useEffect(() => {
    localStorage.setItem('times', JSON.stringify(times));
  }, [times]);

  const [programadores, setProgramadores] = useState(() => {
    const programadorCadastrado = localStorage.getItem('programadores');
    const initialValue = JSON.parse(programadorCadastrado);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('programadores', JSON.stringify(programadores));
  }, [programadores]);

  const aoNovoProgramadorAdicionado = (programador) => {
    setProgramadores([...programadores, programador])
  }

  function deletarProgramador(id) {
    setProgramadores(programadores.filter(programador => programador.id !== id));
  }

  function deletarTime(id, programadorDoTime) {
    setTimes(times.filter(time => time.id !== id));
    setProgramadores(programadorDoTime.filter((programador) =>
      !programadores.includes(programador)
    ))
  }  

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setProgramadores(programadores.map(programador => {
      if(programador.id === id) {
        programador.favorito = !programador.favorito
      };
      return programador
    }))
  }

  return (
    <div className="App">

      <Banner/>

      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoProgramadorCadastrado={programador => (aoNovoProgramadorAdicionado(programador))}
        >
      </Formulario>

      {times.map(time => 
        <Time
          aoDeletarTime={deletarTime}
          aoFavoritar={resolverFavorito}
          id={time.id}
          mudarCor={mudarCorDoTime}
          key={time.nome} 
          nomeDoTime={time.nome} 
          cor={time.cor}
          programadores={programadores.filter(programador => programador.time === time.nome)}
          aoDeletar={deletarProgramador}
        />
      )}

      <Rodape></Rodape>
    </div>
  );
}

export default App;
