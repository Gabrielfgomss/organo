import './Programador.css'

const Programador = ({nome, imagem, experiencia, corDeFundo}) => {
    return (
        <div className='programador'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{experiencia}</h5>
            </div>
        </div>
    )
}

export default Programador