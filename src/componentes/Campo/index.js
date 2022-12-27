import './Campo.css'

const Campo = ({placeholder, aoAlterado, label, type = 'text', valor, obrigatorio}) => {

    const placeholderModificado = `${placeholder}...`

    const aoDigitado = (evento) => {
        
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label >
                {label}
            </label>
            <input
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificado}/>
        </div>
    )
}

export default Campo