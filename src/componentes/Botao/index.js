import './Botao.css'

const Botao = ({children, action, aoRemoverForm}) => {
    return (
        <button className={action} onClick={(evento)=> aoRemoverForm(evento)}>
            {children}
        </button>
    )
}

export default Botao