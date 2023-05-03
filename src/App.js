import { useContext } from 'react';
import { GlobalContext } from './common/Times';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {
  
  const globalContext = useContext(GlobalContext);
  
  return (
    <div className="App">
      <Banner />

      <Formulario></Formulario>

      {globalContext.times.map(time =>
        <Time
          id={time.id}
          key={time.nome}
          nomeDoTime={time.nome}
          cor={time.cor}
        />
      )}

      <Rodape></Rodape>
    </div>
  );
}

export default App;
