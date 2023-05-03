import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './formulario.css'
import { GlobalContext } from '../../common/Times';

const Formulario = () => {
    const globalContext = useContext(GlobalContext);
    const [onScreen, setOnScreen] = useState(true);
    const [nome, setNome] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        globalContext.aoNovoProgramadorAdicionado({
            id: uuidv4(),
            favorito: false,
            nome,
            experiencia,
            imagem,
            time
        })
        setNome('');
        setExperiencia('');
        setImagem('');
        setTime('');
    }

    function removerForm(evento) {
        setOnScreen(current => !current);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} style={{display: onScreen ? 'block' : 'none'}}>
                <h2>Preencha os dados para criar o card do programador.</h2>
                <Campo 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}>
                </Campo>
                <Campo 
                    obrigatorio={true} 
                    label='Experiencia' 
                    placeholder='ex. Júnior, Pleno ou Sênior'
                    valor={experiencia}
                    aoAlterado={valor => setExperiencia(valor)}>
                </Campo>
                <Campo 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}>
                </Campo>
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Time' 
                    itens={globalContext.times.map((time) => time.nome)}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}>
                </ListaSuspensa>
                <Botao action='botao-card'>
                    Criar card
                </Botao>
            </form>
            <form onSubmit={(evento)=>{
                evento.preventDefault();
                globalContext.cadastrarTime({ nome: nomeTime, cor: corTime});
            }}
                style={{display: onScreen ? 'block' : 'none'}}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}>
                </Campo>
                <Campo 
                    type='color'
                    obrigatorio={true} 
                    label='Cor' 
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}>
                </Campo>
                <Botao 
                    action='botao-card'>
                    Criar um novo time
                </Botao>
            </form>
            <div className='formulario__index'>
                <p>Minha organização:</p>
                <div></div>
                <button className='botao-form'
                    onClick={(evento)=> removerForm(evento)}
                    >
                </button>
            </div>
        </section>
    )
}

export default Formulario