import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './formulario.css'
import { IProgramador } from '../../shared/interfaces/IProgramador.js';
import { ITimes } from '../../shared/interfaces/ITimes';

interface FormularioProps {
    aoProgramadorCadastrado: (programador: IProgramador) => void
    times: ITimes[],
    cadastrarTime: (novoTime: ITimes) => void
}

const Formulario = ({ aoProgramadorCadastrado, times, cadastrarTime }: FormularioProps) => {
    console.log(times)
    const [onScreen, setOnScreen] = useState(true);
    const [nome, setNome] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        aoProgramadorCadastrado({
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

    function removerForm() {
        setOnScreen(current => !current);
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar} style={{ display: onScreen ? 'block' : 'none' }}>
                <h2>Preencha os dados para criar o card do programador.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <Campo
                    obrigatorio={true}
                    label='Experiencia'
                    placeholder='ex. Júnior, Pleno ou Sênior'
                    valor={experiencia}
                    aoAlterado={valor => setExperiencia(valor)} />

                <Campo
                    obrigatorio={false}
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Time'
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)} />
                <Botao
                    action="botao-card">
                    <span>Criar card</span>
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                cadastrarTime({ nome: nomeTime, cor: corTime, id: uuidv4() });
            }}
                style={{ display: onScreen ? 'block' : 'none' }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)} />
                <Campo
                    type='color'
                    obrigatorio={true}
                    label='Cor'
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)} />
                <Botao
                    action="botao-card">
                    <span>Criar um novo time</span>
                </Botao>
            </form>
            <div className='formulario__index'>
                <p>Minha organização:</p>
                <div></div>
                <Botao
                    aoRemoverForm={removerForm}
                    action='botao-form' />
            </div>
        </section>
    )
}

export default Formulario