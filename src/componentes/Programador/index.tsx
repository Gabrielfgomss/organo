import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './Programador.css';

interface ProgramadorProps {
    id: string,
    nome: string,
    imagem: string,
    experiencia: string,
    corDeFundo: string,
    favorito: Boolean
    aoDeletar: (id: string) => void,
    aoFavoritar: (id: string) => void
}

const Programador = ({nome, imagem, experiencia, corDeFundo, aoDeletar, id, favorito, aoFavoritar}: ProgramadorProps) => {
    
    function favoritar() {
        aoFavoritar(id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='programador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)} 
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{experiencia}</h5>
                
                <div className='favoritar'>
                    
                    {favorito ? <AiFillHeart {...propsFavorito} color='#ff000'/>:<AiOutlineHeart {...propsFavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default Programador