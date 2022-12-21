import Programador from '../Programador'
import './Time.css'

const Time = (props) => {
    return (
        (props.programadores.length > 0) ?
        <section 
        className='time'
        style={{ backgroundColor: props.corPrimaria }}>
            <h3 
            style={{ borderColor: props.corSecundaria }}>{props.nome}
            </h3>
            <div className='programadores'>
                {props.programadores.map( programador => <Programador
                corDeFundo={props.corSecundaria}
                key={programador.nome} 
                nome={programador.nome}
                experiencia={programador.experiencia}
                imagem={programador.imagem} >
            </Programador> )}
            </div>
        </section>
        : ''
    )
}

export default Time