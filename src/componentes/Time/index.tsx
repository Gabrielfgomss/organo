import Programador from '../Programador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'
import { IProgramador } from '../../shared/interfaces/IProgramador';

interface TimeProps {
    id: string
    programadores: IProgramador[],
    nomeDoTime: string,
    cor: string,
    aoDeletar: (id: string) => void,
    mudarCor: (cor: string, id: string) => void,
    aoFavoritar: (id: string) => void
}

const Time = ({ programadores, nomeDoTime, cor, aoDeletar, mudarCor, id, aoFavoritar }: TimeProps) => {



    return (
        (programadores.length > 0) ?
            <section
                className='time'
                style={{ backgroundColor: hexToRgba(cor, '0.5'), backgroundImage: 'url(/imagens/fundo.png)' }}>
                <input
                    onChange={evento => mudarCor(evento.target.value, id)}
                    value={cor}
                    type='color'
                    className='input-cor'>
                </input>
                <h3
                    style={{ borderColor: cor }}>{nomeDoTime}
                </h3>
                <div className='programadores'>
                    {programadores.map((programador) => {
                        return <Programador
                            corDeFundo={cor}
                            id={programador.id}
                            key={programador.nome}
                            nome={programador.nome}
                            experiencia={programador.experiencia}
                            imagem={programador.imagem}
                            favorito={programador.favorito}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    })
                    }
                </div>
            </section>
            : <></>
    )
}

export default Time