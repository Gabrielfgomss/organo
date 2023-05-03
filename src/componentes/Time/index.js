import { MdDeleteForever } from 'react-icons/md';
import Programador from '../Programador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';
import { useContext } from 'react';
import { GlobalContext } from '../../common/Times';

const Time = ({ nomeDoTime, cor, id }) => {

    const globalContext = useContext(GlobalContext)

    return (
        <>
            {
                globalContext.programadores.filter(programador => programador.time === nomeDoTime).length > 0 ?
                    <section
                        className='time'
                        style={{ backgroundColor: hexToRgba(cor, '0.5'), backgroundImage: 'url(/imagens/fundo.png)' }}
                        key={nomeDoTime}>
                        <MdDeleteForever
                            size={25}
                            className='deletarTime'
                            onClick={() => { globalContext.deletarTime(id, nomeDoTime) }}>
                        </MdDeleteForever>
                        <input
                            onChange={evento => globalContext.mudarCorDoTime(evento.target.value, id)}
                            value={cor}
                            type='color'
                            className='input-cor'>
                        </input>

                        <h3
                            style={{ borderColor: cor }}>{nomeDoTime}
                        </h3>
                        <div className='programadores'>
                            {globalContext.programadores.filter((programador) => programador.time === nomeDoTime).map((programador) => {
                                return (
                                    <Programador
                                        corDeFundo={cor}
                                        id={programador.id}
                                        key={programador.nome}
                                        nome={programador.nome}
                                        experiencia={programador.experiencia}
                                        imagem={programador.imagem}
                                        favorito={programador.favorito}
                                    />
                                )
                            })}
                        </div>
                    </section>
                    : ''
            }
        </>

    )
}

export default Time