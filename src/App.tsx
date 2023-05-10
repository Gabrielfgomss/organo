import { useState, useEffect } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';
import { IProgramador } from './shared/interfaces/IProgramador';
import { ITimes } from './shared/interfaces/ITimes';

function App() {

  const [times, setTimes] = useState<ITimes[]>(
    
    JSON.parse(localStorage.getItem('times') || 'null')||[
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
    ]
  )

  useEffect(() => {
    localStorage.setItem('times', JSON.stringify(times));
  }, [times]);

  const [programadores, setProgramadores] = useState<IProgramador[]>(
    JSON.parse(localStorage.getItem('programadores') || 'null')||[]);

  useEffect(() => {
    localStorage.setItem('programadores', JSON.stringify(programadores));
  }, [programadores]);

  const aoNovoProgramadorAdicionado = (programador: IProgramador) => {
    setProgramadores([...programadores, programador])
  }

  function deletarProgramador(id: String) {
    setProgramadores(programadores.filter(programador => programador.id !== id));
  }

  function mudarCorDoTime(cor: string, id: string) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time
    }));
  }

  function cadastrarTime(novoTime: ITimes) {
    setTimes([...times, { ...novoTime }]); 
  }
  
  function resolverFavorito(id: string) {
    setProgramadores(programadores.map(programador => {
      if (programador.id === id) {
        programador.favorito = !programador.favorito
      };
      return programador
    }))
  }

  return (
    <div className="App">

      <Banner enderecoImagem='/imagens/banner.png' textoAlternativo='O banner principal do Organo' />

      <Formulario
        cadastrarTime={cadastrarTime}
        times={times}
        aoProgramadorCadastrado={programador => (aoNovoProgramadorAdicionado(programador))}
      />

      {times.map(time =>
        <Time
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
