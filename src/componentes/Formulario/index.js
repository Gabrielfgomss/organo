import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react'
import './formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoProgramadorCadastrado({
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

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do programador.</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite seu nome'
                valor={nome}
                aoAlterado={valor => setNome(valor)}>
                </CampoTexto>
                <CampoTexto 
                obrigatorio={true} 
                label='Experiencia' 
                placeholder='ex. Júnior, Pleno ou Sênior'
                valor={experiencia}
                aoAlterado={valor => setExperiencia(valor)}>
                </CampoTexto>
                <CampoTexto 
                label='Imagem' 
                placeholder='Digite o endereço da imagem'
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}>
                </CampoTexto>
                <ListaSuspensa 
                obrigatorio={true} 
                label='Time' 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}>
                </ListaSuspensa>
                <Botao texto='Criar card'>
                    Criar Botão
                </Botao>
            </form>
        </section>
    )
}

export default Formulario