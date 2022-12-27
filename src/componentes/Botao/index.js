import './Botao.css'

const Botao = ({children, action}) => {
    return (
        <button className={action}>
            {children}
        </button>
    )
}

export default Botao